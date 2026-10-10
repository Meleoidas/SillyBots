const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    InteractionContextType,
} = require("discord.js");
const { WelcomeEmbed, welcomeChoices } = require("../../utils/WelcomeEmbed.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("testgreet")
        .setDescription("testin")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild)
        .addStringOption((option) =>
            option
                .setName("type")
                .setDescription("type")
                .addChoices(
                    { name: "yellow", value: "yellow" },
                    { name: "blue", value: "blue" },
                    { name: "red", value: "red" },
                    { name: "all", value: "all" },
                ),
        ),
    async execute(interaction) {
        const welcome = interaction.guild.channels.cache.get(interaction.channelId);

        const type = interaction.options.getString("type");
        let lastType;

        if (type === "all")
            return welcomeChoices.forEach(async (message) => {
                const embed = new WelcomeEmbed(interaction, message.type);
                const msg = await welcome.send({
                    content: `_ _ <:sabaEars:1490071805329801326>　<@${interaction.user.id}>`,
                    embeds: [embed],
                });
                message.reactions.forEach((reaction) => msg.react(reaction));
            });

        if (type) {
            lastType = "";
        }

        const embed = new WelcomeEmbed(interaction, type);

        const msg = await welcome.send({
            content: `_ _ <:sabaEars:1490071805329801326>　<@${interaction.user.id}>`,
            embeds: [embed],
        });

        welcomeChoices[embed.index].reactions.forEach((reaction) =>
            msg.react(reaction),
        );
    },
};
