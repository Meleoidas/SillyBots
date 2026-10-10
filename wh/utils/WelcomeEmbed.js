const {
    TextDisplayBuilder,
    ThumbnailBuilder,
    SectionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize
} = require("discord.js");

const welcomeChoices = [
    {
        type: "1",
        thumbnail:
            "https://media.discordapp.net/attachments/955937193564712971/1514428671111204914/New_Project91.png",
    },
    {
        type: "2",
        thumbnail:
            "https://media.discordapp.net/attachments/955937193564712971/1514428671417520188/New_Project111.png",
    },
    {
        type: "3",
        thumbnail:
            "https://media.discordapp.net/attachments/955937193564712971/1514428671799197817/New_Project101.png",
    },
];

function getWelcomeComponents(context, type) {
    const guild = context.guild;

    let index;
    if (type) {
        index = welcomeChoices.findIndex((obj) => obj.type === type);
        getWelcomeComponents.lastType = "";
    } else {
        index = Math.floor(Math.random() * welcomeChoices.length);
        while (welcomeChoices[index].type === getWelcomeComponents.lastType)
            index = Math.floor(Math.random() * welcomeChoices.length);
        getWelcomeComponents.lastType = welcomeChoices[index].type;
    }

    const thumbnail = welcomeChoices[index].thumbnail;

    return [
        new SectionBuilder()
            .setThumbnailAccessory(new ThumbnailBuilder().setURL(thumbnail))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `Welcome, <@${context.user.id}>\n              __歓迎__\n                                           <a:pink_Flowers:1515700862113288382>\n-# we are now ${guild.memberCount}`,
                ),
            ),
        new SeparatorBuilder()
            .setSpacing(SeparatorSpacingSize.Small)
            .setDivider(true),
    ];
}

getWelcomeComponents.lastType = "";

module.exports = {
    getWelcomeComponents,
    welcomeChoices,
};
