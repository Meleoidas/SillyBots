const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "6",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828656272081551422")) {
            await interaction.reply({
                content: "-# Added <@&828656272081551422>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828656272081551422>",
                ephemeral: true,
            });
        }
    },
};
