const jarvis = /(?:jarv|<@1385631548702724300>)((?!remind).)*(?:should|true|false)/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        if (!jarvis.test(msg.content)) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        const index = Math.floor(Math.random() * 2);
        if (index === 0) chnl.send("yes");
        else chnl.send("no");

        return true;
    },
};
