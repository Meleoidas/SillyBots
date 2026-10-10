const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "4",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "828660950348988426")) {
            await interaction.reply({
                content: "-# Added <@&828660950348988426>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&828660950348988426>",
                ephemeral: true,
            });
        }
    },
};
