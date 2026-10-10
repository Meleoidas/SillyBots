const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const games = new Map();
const ROWS = 6;
const COLUMNS = 7;
const EMPTY = "⚪";
const PIECES = ["🔴", "🟡"];

function createBoard() {
    return Array.from({ length: ROWS }, () => Array(COLUMNS).fill(EMPTY));
}

function renderBoard(board) {
    return new EmbedBuilder()
        .setDescription(board.map((row) => row.join("")).join("\n"));
}

function dropPiece(board, column, piece, test = false) {
    for (let row = ROWS - 1; row >= 0; row -= 1) {
        if (board[row][column] === EMPTY) {
            if (!test) board[row][column] = piece;
            return row;
        }
    }
    return -1;
}

function hasWinner(board, row, column, piece) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

    return directions.some(([rowStep, columnStep]) => {
        let count = 1;
        for (const direction of [-1, 1]) {
            let currentRow = row + rowStep * direction;
            let currentColumn = column + columnStep * direction;
            while (
                currentRow >= 0 && currentRow < ROWS &&
                currentColumn >= 0 && currentColumn < COLUMNS &&
                board[currentRow][currentColumn] === piece
            ) {
                count += 1;
                currentRow += rowStep * direction;
                currentColumn += columnStep * direction;
            }
        }
        return count >= 4;
    });
}

async function startTimeout(interaction, gameId, game) {
    return setTimeout(async () => {
        if (games.get(gameId) !== game) return;

        games.delete(gameId);
        const disabledRow1 = new ActionRowBuilder();
        const disabledRow2 = new ActionRowBuilder();
        for (let column = 0; column < 7; column += 1) {
            const button = new ButtonBuilder()
                .setCustomId(`connect4:${gameId}:${column}`)
                .setLabel(`${column + 1}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true);
            if (column < 4) disabledRow1.addComponents(button);
            else disabledRow2.addComponents(button);
        }

        await interaction.editReply({
            content: `<@${game.players.find((playerId) => playerId !== game.turn)}> W`,
            components: [disabledRow1, disabledRow2],
        });
    }, 60 * 60_000);
}

module.exports = { COLUMNS, EMPTY, PIECES, games, createBoard, dropPiece, hasWinner, renderBoard, startTimeout };