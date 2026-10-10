const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    InteractionContextType,
} = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fjoin")
        .setDescription("joins vc")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),
    async execute(interaction) {

        const channel = interaction.member.voice.channel;

        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    },
};
