const jarvis = /jarv(?!remind).*say\s+(.+)/is;

module.exports = {
    name: "say",
    admin: true,
    async execute(msg) {
        const result = msg.content.match(jarvis);
        if (!result) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        await chnl.send(result[1]);
        return true;
    },
};
