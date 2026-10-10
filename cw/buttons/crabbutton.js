const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "crabbutton",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "1490094792099631294")) {
            await interaction.reply({
                content: "-# °‧⠀**Enabled**⠀<@&1490094792099631294>⠀ !͟!",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# °‧⠀**Disabled**⠀<@&1490094792099631294>⠀ !͟!",
                ephemeral: true,
            });
        }
    },
};
