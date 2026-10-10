const jarvis = /jarv((?!remind).)*(?:gn|night|nb)/is;
const jarvis2 = /(?:gn|night|nb).*jarv/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        if (!jarvis.test(msg.content) && !jarvis2.test(msg.content)) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        chnl.send("gn <:InabaSleep:1501544273525473371>");

        return true;
    },
};
