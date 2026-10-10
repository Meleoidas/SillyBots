const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "unknown",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828417478916571137")) {
            await interaction.reply({
                content: "-# Added <@&828417478916571137>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828417478916571137>",
                ephemeral: true,
            });
        }
    },
};
