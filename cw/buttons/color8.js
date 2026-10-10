const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color8",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786033465299005");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786033465299005>⠀ !͟!",
            ephemeral: true,
        });
    },
};
