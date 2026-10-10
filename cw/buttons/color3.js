const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color3",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786014423285812");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786014423285812>⠀ !͟!",
            ephemeral: true,
        });
    },
};
