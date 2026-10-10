const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "16",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828415461065621545")) {
            await interaction.reply({
                content: "-# Added <@&828415461065621545>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828415461065621545>",
                ephemeral: true,
            });
        }
    },
};
