const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const {
    EMPTY,
    PIECES,
    games,
    dropPiece,
    hasWinner,
    renderBoard,
    startTimeout,
} = require("../utils/connect4Game");

module.exports = {
    customId: "connect4",
    async execute(interaction) {
        const [, gameId, columnText] = interaction.customId.split(":");
        const game = games.get(gameId);
        const column = Number(columnText);

        if (!game) {
            await interaction.reply({ content: "this game has expired", ephemeral: true });
            return;
        }

        if (!game.players.includes(interaction.user.id)) {
            await interaction.reply({ content: "not your game", ephemeral: true });
            return;
        }
        if (game.turn !== interaction.user.id) {
            await interaction.reply({ content: "not your turn", ephemeral: true });
            return;
        }

        clearTimeout(game.timeout);

        const piece = PIECES[game.players.indexOf(interaction.user.id)];
        const row = dropPiece(game.board, column, piece);

        const won = hasWinner(game.board, row, column, piece);
        const draw = !won && game.board.every((boardRow) => boardRow.every((cell) => cell !== EMPTY));
        const nextPlayer = game.players.find((playerId) => playerId !== interaction.user.id);

        if (won || draw) {
            games.delete(gameId);
        } else {
            game.turn = nextPlayer;
        }

        const content = won
            ? `<@${interaction.user.id}> W`
            : draw
                ? "draw"
                : `<@${nextPlayer}>'s turn`;

        let row1 = new ActionRowBuilder(), row2 = new ActionRowBuilder();
        for (let column = 0; column < 7; column++) {
            const button = new ButtonBuilder()
                .setCustomId(`connect4:${gameId}:${column}`)
                .setLabel(`${column + 1}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(won || draw || dropPiece(game.board, column, piece, true) === -1);
            if (column < 4) row1.addComponents(button);
            else row2.addComponents(button);
        }

        await interaction.update({
            content,
            embeds: [renderBoard(game.board)],
            components: [row1, row2],
        });

        if (!won && !draw) {
            game.timeout = await startTimeout(interaction, gameId, game);
        }
    },
};