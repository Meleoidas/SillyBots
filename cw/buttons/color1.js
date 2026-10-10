const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color1",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350785963814682644");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350785963814682644>⠀ !͟!",
            ephemeral: true,
        });
    },
};
