const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "starbutton",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "1490094785287946434")) {
            await interaction.reply({
                content: "-# °‧⠀**Enabled**⠀<@&1490094785287946434>⠀ !͟!",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# °‧⠀**Disabled**⠀<@&1490094785287946434>⠀ !͟!",
                ephemeral: true,
            });
        }
    },
};
