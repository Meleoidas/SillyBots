const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "5",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828650894362411080")) {
            await interaction.reply({
                content: "-# Added <@&828650894362411080>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828650894362411080>",
                ephemeral: true,
            });
        }
    },
};
