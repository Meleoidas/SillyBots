const { SlashCommandBuilder, InteractionContextType, MessageFlags } = require("discord.js");
const { leaderboardPageComponents, scheduleLeaderboardTimeout } = require("../../utils/LevelEmbed.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Show the server's leaderboard")
        .setContexts(InteractionContextType.Guild),
    async execute(interaction) {
        const components = await leaderboardPageComponents(1, interaction);

        const reply = await interaction.reply({
            flags: MessageFlags.IsComponentsV2,
            components,
            withResponse: true,
            allowedMentions: { parse: [] }
        });

        const message = await interaction.fetchReply();
        scheduleLeaderboardTimeout(message, 1, interaction);

        return reply;
    },
};
