const { EmbedBuilder } = require("discord.js");

const welcomeChoices = [
    {
        type: "yellow",
        hex: "F7EFDB",
        emoji: [
            "<:mSabaHeart:1490071864301715496>", "<:mSabaPaperBoat:1487381539984773303>"],
        role: "1490068695710437407",
        reactions: ["<:sabaWave:1490106222354104500>"],
    },
    {
        type: "blue",
        hex: "6CBFDE",
        emoji: ["<:mSabaBow:1489810179649175744>", "<:mSaba:1486412984623300658>"],
        role: "1490066789533483288",
        reactions: ["<:sabaWave:1490106222354104500>"],
    },
    {
        type: "red",
        hex: "D4404D",
        emoji: [
            "<:mSabaBuoy:1486413073618042920>", "<:sabaCrab:1487385562301071410>"],
        role: "1490068699271532665",
        reactions: ["<:sabaWave:1490106222354104500>"],
    },
];

class WelcomeEmbed extends EmbedBuilder {
    constructor(context, type) {
        super();

        const guild = context.guild;
        const ordinal = WelcomeEmbed.getOrdinal(guild.memberCount);

        let hex, img, index;

        if (type) {
            index = welcomeChoices.findIndex((obj) => obj.type === type);
            WelcomeEmbed.lastType = "";
        } else {
            index = Math.floor(Math.random() * welcomeChoices.length);
            while (welcomeChoices[index].type === WelcomeEmbed.lastType)
                index = Math.floor(Math.random() * welcomeChoices.length);
            WelcomeEmbed.lastType = welcomeChoices[index].type;
        }

        hex = welcomeChoices[index].hex;

        this.index = index;

        this.setColor(`#${hex}`).setThumbnail(
            "https://media.discordapp.net/attachments/1020330308492611754/1527727662100119685/6vvf6.png",
        )
            .setDescription(`-# _ _𓇼𓇼 ゛<:welc1:1489830643234898120><:welc2:1489830667645616239>  ࣪ ${welcomeChoices[index].emoji[0]} 
-# _ _⠀⠀⠀ <@&${welcomeChoices[index].role}>\`${ordinal}\` ᵎᵎ 
_ _⠀⠀[ᵇ ̥**ᵒ** ̥**ᵒ** ᵏ](<https://discord.com/channels/738983571531890799/739724383282528330>)  　𝄄⠀⠀[ᵗ ̥**ᵒ** ⁿ ᵉ](<https://discord.com/channels/738983571531890799/954509219850248212>)  
-# ⠀⠀⠀ [°‧ ](<https://discord.com/channels/738983571531890799/739724383282528330>)𓆝 𓆟 𓆞[ ·｡](<https://discord.com/channels/738983571531890799/954509219850248212>)⠀⠀${welcomeChoices[index].emoji[1]}`);
    }

    static getOrdinal(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    static lastType = "";
}

module.exports = {
    WelcomeEmbed,
    welcomeChoices,
};
