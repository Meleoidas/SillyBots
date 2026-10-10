const { UserWh } = require("../../../db.js");
const { getNewRole, levelRoles } = require("../../utils/level.js");

module.exports = {
    async execute(msg) {

        let user = await UserWh.findOne({ id: msg.author.id });
        if (!user) {
            user = new UserWh();
            user.id = msg.author.id;
        }

        user.xp++;
        if (user.level < 3 && user.xp >= levelRoles[user.level][0]) {

            const channel = msg.guild.channels.cache.get(msg.channelId);
            await getNewRole(user, msg);
            channel.send({
                content: `<@${msg.author.id}>  ++ ${[levelRoles[user.level][2]]}`,
                allowedMentions: { users: [msg.author.id] }
            });

            user.level++;
        }

        await user.save();
    },
};
