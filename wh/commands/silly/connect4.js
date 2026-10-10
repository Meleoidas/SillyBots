const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    SlashCommandBuilder,
    InteractionContextType,
} = require("discord.js");
const { games, createBoard, renderBoard, startTimeout } = require("../../utils/connect4Game");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("connect4")
        .setDescription("connect 4")
        .setContexts(InteractionContextType.Guild)
        .addUserOption((option) =>
            option
                .setName("user")
                .setDescription("user to play against")
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.user;
        const opponent = interaction.options.getUser("user");

        if (opponent.id === user.id || opponent.bot) {
            await interaction.reply({
                content: "choose someone else",
                ephemeral: true,
            });
            return;
        }

        const gameId = interaction.id;
        games.set(gameId, {
            players: [user.id, opponent.id],
            turn: user.id,
            board: createBoard(),
            timeout: null,
        });

        let row1 = new ActionRowBuilder(), row2 = new ActionRowBuilder();
        for (let column = 0; column < 7; column++) {
            const button = new ButtonBuilder()
                .setCustomId(`connect4:${gameId}:${column}`)
                .setLabel(`${column + 1}`)
                .setStyle(ButtonStyle.Secondary)
            if (column < 4) row1.addComponents(button);
            else row2.addComponents(button);
        }

        await interaction.reply({
            content: `${user}'s turn`,
            embeds: [renderBoard(games.get(gameId).board)],
            components: [row1, row2],
        });

        const game = games.get(gameId);
        game.timeout = startTimeout(interaction, gameId, game)
    },
};
