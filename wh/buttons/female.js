const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "female",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828417507504160819")) {
            await interaction.reply({
                content: "-# Added <@&828417507504160819>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828417507504160819>",
                ephemeral: true,
            });
        }
    },
};
