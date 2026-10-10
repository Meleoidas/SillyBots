const { MessageFlags } = require("discord.js");
const { UserCw } = require("../../../db.js");
const { getNewRole, levelComponents } = require("../../utils/LevelEmbed.js");

module.exports = {
    async execute(msg) {

        let user = await UserCw.findOne({ id: msg.author.id });
        if (!user) {
            user = new UserCw();
            user.id = msg.author.id;
        }

        user.totalXp++;
        if (++user.xp >= user.maxXp) {
            user.level++;
            user.xp = 0;
            user.maxXp = Math.round(user.maxXp * 1.33);

            const channel = msg.guild.channels.cache.get(msg.channelId);
            const components = await levelComponents(user);
            let newRole = await getNewRole(user, msg);
            channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: components,
                allowedMentions: { users: [msg.author.id] }
            });
        }

        await user.save();
    },
};
