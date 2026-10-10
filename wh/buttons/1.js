const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "1",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828629282804334614")) {
            await interaction.reply({
                content: "-# Added <@&828629282804334614>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828629282804334614>",
                ephemeral: true,
            });
        }
    },
};
