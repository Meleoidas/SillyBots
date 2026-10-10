const chrono = require("chrono-node");

const jarvis = /(?<=jarv.*(?:say|remind.*?(?:that|to|about))\s+(.+)\s)((?:tomorrow|next|at|in(?=.+\d)|on)(?:\s+.*|$))/is;
const jarvis2 = /jarv.*remind.*?((?:tomorrow|next|at|in|on)\s*.*?)\s+(?:that|to|about)\s+(.+)/is;
let day = 24 * 60 * 60 * 1000;

module.exports = {
    fellow: true,
    async execute(msg) {
        const chnl = await msg.client.channels.fetch(msg.channelId);
        let delay, reminder;

        let result = msg.content.match(jarvis);
        if (result) {
            const parsedDate = chrono.parseDate(result[2]);
            if (!parsedDate) return;

            let currentTime = new Date();
            delay = parsedDate - currentTime;
            if (delay < -day) delay += 7 * day;
            if (delay < 0) delay += day;

            reminder = result[1].replace(/my/gi, "your");
        } else {
            result = msg.content.match(jarvis2);
            if (!result) return false;

            const parsedDate = chrono.parseDate(result[1]);
            if (!parsedDate) return;

            let currentTime = new Date();
            delay = parsedDate - currentTime;
            if (delay < -day) delay += 7 * day;
            if (delay < 0) delay += day;

            reminder = result[2].replace(/my/gi, "your");
        }

        setTimeout(() => {
            chnl.send({
                content: `<@${msg.author.id}> ${reminder}!!!!`,
                allowedMentions: { users: [msg.author.id] }
            });
        }, delay);

        await chnl.send("<:yotsubaSalute:1501542227158237194>");
        return true;
    },
};
