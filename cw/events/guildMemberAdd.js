const { Events } = require("discord.js");
const { WelcomeEmbed, welcomeChoices } = require("../utils/WelcomeEmbed.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        if (member.guild.id !== "738983571531890799") return;

        try {
            const chat = await member.guild.channels.cache.get("1491470206722244821");
            const hue = await member.guild.channels.cache.get("954509219850248212");

            const hueMsg = await hue.send(`<@${member.user.id}>`);
            hueMsg.delete();

            const embed = new WelcomeEmbed(member);
            const msg = await chat.send({
                content: `_ _ <:sabaEars:1490071805329801326>　<@${member.user.id}>`,
                embeds: [embed],
            });
            welcomeChoices[embed.index].reactions.forEach((reaction) =>
                msg.react(reaction),
            );
        } catch (error) {
            console.log(`Error welcoming members: ${error}`);
        }
    },
};
