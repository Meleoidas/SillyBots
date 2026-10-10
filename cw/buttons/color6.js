const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color6",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786040222187530");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786040222187530>⠀ !͟!",
            ephemeral: true,
        });
    },
};
