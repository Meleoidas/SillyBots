const jarvis = /jarv((?!remind).)*clip/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        const result = msg.content.match(jarvis);
        if (!result) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        chnl.send("clipped");

        return true;
    },
};
