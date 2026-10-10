const { Events, MessageFlags } = require("discord.js");
const { getWelcomeComponents } = require("../utils/WelcomeEmbed.js");

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        try {
            const chat = await member.guild.channels.cache.get("1081538475058270258");

            const components = getWelcomeComponents(member);
            await chat.send({
                flags: MessageFlags.IsComponentsV2,
                components: components,
            });
        } catch (error) {
            console.log(`Error welcoming members: ${error}`);
        }
    },
};
