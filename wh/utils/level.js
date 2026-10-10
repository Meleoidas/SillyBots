const levelRoles = [
    [30, "868925036327747626", "<:I_:1519439506238083123>"],
    [2500, "868925039871926272", "<:II:1519439481093230733>"],
    [10000, "868925264837640272", "<:III:1519439551720984747>"]
];

async function getNewRole(user, msg) {
    const member = await msg.guild.members.fetch(msg.author.id);
    await member.roles.add(levelRoles[user.level][1]);
}

module.exports = {
    levelRoles,
    getNewRole,
}