const jarvis = /jarv((?!remind).)*laugh/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        const result = msg.content.match(jarvis);
        if (!result) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        chnl.send("<:sabaLaughinAtYou:1501555955211702362>");

        return true;
    },
};
