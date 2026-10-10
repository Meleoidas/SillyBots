const { SlashCommandBuilder, InteractionContextType } = require("discord.js");
const { UserCw } = require("../../../db.js");
const { RankEmbed, getRank } = require("../../utils/LevelEmbed.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rank")
        .setDescription("Check your rank")
        .setContexts(InteractionContextType.Guild),
    async execute(interaction) {

        let user = await UserCw.findOne({ id: interaction.user.id });
        if (!user) {
            user = new UserCw({ id: interaction.user.id });
            user.save();
        }

        const rank = await getRank(user);
        let embed = new RankEmbed(user, rank);

        interaction.reply({
            embeds: [embed]
        });
    },
};
