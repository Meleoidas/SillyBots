const fs = require("node:fs");
const path = require("node:path");
const jarvis = /(?:jarv|<@1385631548702724300>)((?!remind).)*what can i do/is;

module.exports = {
    fellow: true,
    async execute(msg) {
        if (!jarvis.test(msg.content)) return false;

        const chnl = await msg.client.channels.fetch(msg.channelId);
        const commandFiles = fs
            .readdirSync(__dirname)
            .filter((file) => file !== path.basename(__filename));

        const usableCommands = commandFiles
            .map((file) => file.replace(/^\d+/, "").replace(/\.js$/, ""))
            .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));


        await chnl.send(
            `${usableCommands.join(", ")}`,
        );

        return true;
    },
};
