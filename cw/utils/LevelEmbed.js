const { EmbedBuilder, TextDisplayBuilder, ThumbnailBuilder, SectionBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ContainerBuilder } = require("discord.js");
const { UserCw } = require("../../db.js");

const levelRoles = {
    1: '1350636930186084442',
    2: '1350636955871740024',
    5: '1350636972867325963',
    10: '1350636985227939872'
}

const leaderboardTimeouts = new Map();

const leaderboardThumbnails = [
    'https://media.discordapp.net/attachments/1020330308492611754/1527757953128468651/r58d8.png',
    'https://media.discordapp.net/attachments/1020330308492611754/1527731204260888696/fd99p.png',
    'https://media.discordapp.net/attachments/1020330308492611754/1527763171870511224/r599p.png'
]

async function getNewRole(user, msg) {
    const member = await msg.guild.members.fetch(msg.author.id);

    for (const [level, roleId] of Object.entries(levelRoles)) {
        if (user.level === level) {
            await member.roles.add(roleId);
            return level;
        }
    }
    return false;
}

async function levelComponents(user) {
    let content, components = [];
    if (levelRoles[user.level]) {
        content = `-#  **. 　 *　 new role unlocked ! well done ! 　 ₊ 　 ˚**\n⠀\n> ⠀⠀⠀⠀⠀⠀ ८<@&${levelRoles[user.level]}>১\n  \n-#  . 　 *　 continue leveling up for perks ! 　 ₊ 　 ˚`;
        components.push(new TextDisplayBuilder().setContent(`<@${user.id}>`));
    }

    else
        content =  `<:mSabaWow:1527805193406906529>⠀⠀<@${user.id}> has **leveled** up!⠀⠀<:sabaHug:1527805301380878596> \n-# **.⠀⠀*⠀⠀continue leveling up for perks !⠀⠀ ₊⠀⠀˚**`;

    components.push(
        new ContainerBuilder()
            .setAccentColor(15459280)
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(content),
            )
        );

    return components;
}

async function getRank(user) {
    const higherCount = await UserCw.countDocuments({
        totalXp: { $gt: user.totalXp }
    })
    const rank = higherCount + 1;
    return rank;
}

class RankEmbed extends EmbedBuilder {
    constructor(user, rank) {
        super();

        this.setColor('#EBE3D0');
        this.setThumbnail('https://media.discordapp.net/attachments/1020330308492611754/1526582760037285888/2872z.png');

        this.setDescription(`؜ ⠀<@${user.id}><:s_:1526597004661096519>[｡ ˚ ⋆ ](<https://www.youtube.com/watch?v=k3cryiz8nJo>)⠀\n؜⠀<:llevel1:1526371246957268992><:llevel2:1526371272462962821>⠀⠀[｡ ‧  ˚ ‧ ｡°](<https://www.youtube.com/watch?v=k3cryiz8nJo>)⠀⠀⠀𝄄\n؜⠀${user.level} (${Math.floor((user.xp / user.maxXp) * 100)}%)⠀ [˚.](<https://www.youtube.com/watch?v=k3cryiz8nJo>) ⠀<:lrank1:1526381274732695563><:lrank2:1526381291623415938>⠀⠀𝄄\n؜⠀𓆝 𓆟 𓆞 [‧ ｡°](<https://www.youtube.com/watch?v=k3cryiz8nJo>)${"⠀".repeat(Math.max(3 - rank.toString().length), 0)}#${rank}⠀⠀⠀𝄄`)
    }
}

function getLeaderboardRows(users, skip) {
    let content1 = '', content2 = '', content3 = '';

    for (index = 1; index <= 5; index++) {
        const rank = skip + index > 3 ? skip + index : (index === 1 ? '🥇' : (index === 2 ? '🥈' : '🥉'));
        let line;
        if (users[index - 1])
            line = `⠀⠀\`${typeof rank === "number" ? rank + "𓈒" : rank}\`⠀<@${users[index - 1].id}>\n-# ⠀⠀ <:bubble2:1485542222823686215> ⠀lvl ${users[index - 1].level} (${Math.floor(users[index - 1].xp / users[index - 1].maxXp * 100)}%)`;
        else
            line = `⠀\n-# ⠀`;

        if (index != 5) line += '\n';
        if (index % 2 === 1 && index != 5) line += '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀𝄄\n';

        if (index % 10 < 3) content1 += line;
        else if (index % 10 === 5) content3 += line;
        else content2 += line;
    }

    return [content1, content2, content3];
}

function clearLeaderboardTimeout(messageId) {
    const timeout = leaderboardTimeouts.get(messageId);
    if (timeout) {
        clearTimeout(timeout);
        leaderboardTimeouts.delete(messageId);
    }
}

function scheduleLeaderboardTimeout(message, page, interaction) {
    if (!message?.id) return;

    clearLeaderboardTimeout(message.id);

    const timeout = setTimeout(async () => {
        try {
            const disabledComponents = await leaderboardPageComponents(page, interaction, { disableButtons: true });
            await message.edit({
                components: disabledComponents,
                allowedMentions: { parse: [] },
            });
        } catch (error) {
            console.error("Failed to disable leaderboard buttons:", error);
        } finally {
            leaderboardTimeouts.delete(message.id);
        }
    }, 60 * 1000);

    leaderboardTimeouts.set(message.id, timeout);
}

async function leaderboardPageComponents(page = 1, interaction, options = {}) {
    const limit = 5;
    const skip = (page - 1) * limit;
    const disableButtons = Boolean(options.disableButtons);

    let user = await UserCw.findOne({ id: interaction.user.id });
    if (!user) {
        user = new UserCw({ id: interaction.user.id });
        user.save();
    }
    const interactionRank = await getRank(user);

    const [users, totalUsers] = await Promise.all([
        UserCw.find().sort({ totalXp: -1 }).skip(skip).limit(limit),
        UserCw.countDocuments(),
    ]);

    const [content1, content2, content3] = getLeaderboardRows(users, skip);

    const components = [
        new ContainerBuilder()
            .setAccentColor(15459280)
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL(leaderboardThumbnails[(page - 1) % 3])
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`⠀⠀𓇼𓇼 ゛<:leaderboard1:1527734471238090853><:leaderboard2:1527734488350851203><:leaderboard3:1527734504264044666><:leaderboard4:1527734522878099547><:leaderboard5:1527734540427333794>  ࣪ <:mSabaHeart:1490071864301715496>\n_ _\n${content1}`),
                    ),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL(leaderboardThumbnails[page % 3])
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀𝄄\n${content2}`),
                    ),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL(leaderboardThumbnails[(page + 1) % 3])
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀𝄄\n${content3}\n⠀`),
                    ),
            )
            .addActionRowComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setStyle(ButtonStyle.Secondary)
                            .setLabel("·｡")
                            .setEmoji({
                                id: '1527698487179870258',
                                name: "msaba_r"
                            })
                            .setCustomId(`leaderboardPage:${page - 1}`)
                            .setDisabled(disableButtons || page <= 1),
                        new ButtonBuilder()
                            .setStyle(ButtonStyle.Secondary)
                            .setLabel("‧°")
                            .setEmoji({
                                id: '1486412984623300658',
                                name: "mSaba"
                            })
                            .setCustomId(`leaderboardPage:${page + 1}`)
                            .setDisabled(disableButtons || totalUsers <= page * limit),
                        new ButtonBuilder()
                            .setStyle(ButtonStyle.Secondary)
                            .setLabel(`⠀⠀page:  ${page}⠀𝄄⠀rank: #${interactionRank}⠀⠀`)
                            .setDisabled(true)
                            .setCustomId("bb90db89cedb411bbf517b8817f3281e"),
                    ),
            ),
    ];

    return components;
}

module.exports = {
    levelRoles,
    levelComponents,
    getNewRole,
    getRank,
    leaderboardPageComponents,
    RankEmbed,
    leaderboardPageComponents,
    scheduleLeaderboardTimeout,
}