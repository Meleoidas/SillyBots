const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color9",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786027572428881");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786027572428881>⠀ !͟!",
            ephemeral: true,
        });
    },
};
