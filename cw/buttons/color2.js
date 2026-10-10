const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color2",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786002117197844");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786002117197844>⠀ !͟!",
            ephemeral: true,
        });
    },
};
