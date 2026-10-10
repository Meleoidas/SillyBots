
const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    async execute(msg) {
        if (msg.channel.guildId !== "700083342376304671" || msg.author.bot) return;

        for (const messageCommand of msg.client.messageCommands) {
            try {
                const result = await messageCommand.execute(msg);
                if (result) return;
            } catch (error) {
                console.log(`Error checking messageCommand: ${error}`);
            }
        }
    },
};
