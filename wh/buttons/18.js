const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "18",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828415569521934346")) {
            await interaction.reply({
                content: "-# Added <@&828415569521934346>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828415569521934346>",
                ephemeral: true,
            });
        }
    },
};
