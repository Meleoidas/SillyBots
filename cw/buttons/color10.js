const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color10",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786056508932167");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786056508932167>⠀ !͟!",
            ephemeral: true,
        });
    },
};
