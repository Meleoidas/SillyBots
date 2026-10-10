const { Events, PermissionsBitField } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    async execute(msg) {
        if (msg.channel.guildId !== "738983571531890799" || msg.author.bot) return;

        const guild = msg.client.guilds.cache.get(msg.guildId);
        const member = guild.members.cache.get(msg.author.id);

        for (const messageCommand of msg.client.messageCommands) {
            try {
                if (messageCommand.admin && !member.permissions.has(PermissionsBitField.Flags.Administrator)) continue;
                if (messageCommand.fellow && !member.roles.cache.has('1350641171378081803')) return;
                const result = await messageCommand.execute(msg);
                if (result) return;
            } catch (error) {
                console.log(`Error checking messageCommand: ${error}`);
            }
        }
    },
};
