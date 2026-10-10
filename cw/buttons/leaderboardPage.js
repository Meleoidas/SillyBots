const { MessageFlags } = require("discord.js");
const { leaderboardPageComponents, scheduleLeaderboardTimeout } = require("../utils/LevelEmbed.js");

module.exports = {
    customId: "leaderboardPage",
    async execute(interaction) {
        const page = Number(interaction.customId.split(":")[1] || 1);
        const components = await leaderboardPageComponents(page, interaction);

        const updatedMessage = await interaction.update({
            flags: MessageFlags.IsComponentsV2,
            components,
            allowedMentions: { parse: [] }
        });

        scheduleLeaderboardTimeout(updatedMessage, page, interaction);
    },
};
