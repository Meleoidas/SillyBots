const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color4",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786008387555429");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786008387555429>⠀ !͟!",
            ephemeral: true,
        });
    },
};
