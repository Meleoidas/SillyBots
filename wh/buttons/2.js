const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "2",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828656336409460747")) {
            await interaction.reply({
                content: "-# Added <@&828656336409460747>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828656336409460747>",
                ephemeral: true,
            });
        }
    },
};
