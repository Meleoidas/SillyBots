const jarvisRo = /(?:jarv|<@1385631548702724300>)((?!remind).)*(?:ro.ie|ro.u|neagr.|negr.).*(?:ro.ie|ro.u|neagr.|negr.)/is;
const jarvisEn = /(?:jarv|<@1385631548702724300>)((?!remind).)*(?:black|red).*(?:black|red)/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        const chnl = await msg.client.channels.fetch(msg.channelId);
        const index = Math.floor(Math.random() * 11);

        if (jarvisRo.test(msg.content)) {
            if (index === 0) chnl.send('verde');
            else if(index < 6) chnl.send('roșie');
            else chnl.send('neagră');
        } else if (jarvisEn.test(msg.content)) {
            if (index === 0) chnl.send('green');
            else if(index < 6) chnl.send('red');
            else chnl.send('black');
        } else return false;

        return true;
    },
};
