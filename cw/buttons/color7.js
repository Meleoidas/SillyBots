const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color7",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786048363335700");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786048363335700>⠀ !͟!",
            ephemeral: true,
        });
    },
};
