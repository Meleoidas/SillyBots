const { toggleRole } = require("../utils/toggleRole.js");

module.exports = {
    customId: "fishbutton",
    async execute(interaction) {
        if (await toggleRole(interaction.member, "1490094788916150292")) {
            await interaction.reply({
                content: "-# °‧⠀**Enabled**⠀<@&1490094788916150292>⠀ !͟!",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "-# °‧⠀**Disabled**⠀<@&1490094788916150292>⠀ !͟!",
                ephemeral: true,
            });
        }
    },
};
