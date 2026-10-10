const chrono = require("chrono-node");

const jarvisBanTimer =
    /^(?:jarv|<@1385631548702724300>)(?:(?!remind).)*(?:(?<!un)ban|decapitate|crash|dea|die|kill|(?:send(?=.*(?:france|fr\*nce))))(?:\s*(.*)\s)((?:tomorrow|next|at|in(?=.+\d)|on)(?:\s+.*|$))/is;
const jarvisBan =
    /^(?:jarv|<@1385631548702724300>)(?:(?!remind).)*(?:(?<!un)ban|decapitate|crash|dea|die|(?:send(?=.*(?:france|fr\*nce))))(?:\s+(.+))/is;
const jarvisUnban =
    /^(?:jarv|<@1385631548702724300>)((?!remind).)*(?:unban) (\d+)/is;

module.exports = {
    name: "ban",
    admin: true,
    async execute(msg) {
        if (jarvisBan.test(msg.content)) {
            const chnl = await msg.client.channels.fetch(msg.channelId);

            let user;
            if (msg.mentions.repliedUser) {
                user = msg.mentions.repliedUser.id;
            } else {
                const messages = await chnl.messages.fetch({ limit: 10 });
                for (const message of messages) {
                    if (
                        message[1].author.id !== msg.author.id &&
                        !message[1].author.bot
                    ) {
                        user = message[1].author.id;
                        break;
                    }
                }
            }

            const guild = msg.guild;

            const match = msg.content.match(jarvisBanTimer);
            if (match) {
                const timeStr = match[2];
                if (timeStr) {
                    chnl.send("<:InabaTeatime:1501568209474687006>");
                    const result = chrono.parseDate(timeStr);
                    if (result) {
                        const now = new Date();
                        const delay = result.getTime() - now.getTime();

                        if (delay > 0) {
                            setTimeout(async () => {
                                await guild.members.ban(user, { reason: "Banned by jarvis" });
                                chnl.send(`banned <@${user}>`);
                            }, delay);
                        }
                    }
                }
            } else {
                await guild.members.ban(user, { reason: "Banned by jarvis" });
                chnl.send(`banned <@${user}>`);
            }

            return true;
        } else if (jarvisUnban.test(msg.content)) {
            const chnl = await msg.client.channels.fetch(msg.channelId);
            const guild = msg.guild;

            try {
                const result = msg.content.match(jarvisUnban);
                await guild.bans.fetch(result[2]);
                await guild.members.unban(result[2]);
                chnl.send("unbanned");
            } catch (error) {
                chnl.send("not found");
            }

            return true;
        } else return false;
    },
};
