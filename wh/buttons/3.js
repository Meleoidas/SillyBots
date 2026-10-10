const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "3",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828667770056736798")) {
            await interaction.reply({
                content: "-# Added <@&828667770056736798>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828667770056736798>",
                ephemeral: true,
            });
        }
    },
};
