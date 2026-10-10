const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "21",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "1515664212347850802")) {
            await interaction.reply({
                content: "-# Added <@&1515664212347850802>",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# Removed <@&1515664212347850802>",
                ephemeral: true,
            });
        }
    },
};
