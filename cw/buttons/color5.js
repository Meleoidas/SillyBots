const { toggleRole, removeColorRoles } = require("../utils/toggleRole.js");

module.exports = {
    customId: "color5",
    async execute(interaction) {
        await removeColorRoles(interaction.member);
        await toggleRole(interaction.member, "1350786021536829511");
        await interaction.reply({
            content: "-# °‧⠀**Enabled**⠀<@&1350786021536829511>⠀ !͟!",
            ephemeral: true,
        });
    },
};
