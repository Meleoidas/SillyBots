const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "male",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828417440915652668")) {
            await interaction.reply({
                content: "-# Added <@&828417440915652668>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828417440915652668>",
                ephemeral: true,
            });
        }
    },
};
