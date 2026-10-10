const {
    SlashCommandBuilder,
    MessageFlags,
    PermissionFlagsBits,
    InteractionContextType,
    EmbedBuilder,
    TextDisplayBuilder,
    ContainerBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    SectionBuilder,
    ThumbnailBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sendmsg")
        .setDescription("messages idk")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild)
        .addStringOption((option) =>
            option
                .setName("channel")
                .setDescription("channel")
                .setRequired(true),
        )
        .addStringOption((option) =>
            option
                .setName("type")
                .setDescription("type")
                .setRequired(true)
                .addChoices(
                    { name: "rules", value: "rules" },
                    { name: "colors", value: "colors" },
                    { name: "logs", value: "logs" },
                ),
        ),
    async execute(interaction) {
        const type = interaction.options.getString("type");
        const channelId = interaction.options.getString("channel");

        const channel = interaction.guild.channels.cache.get(channelId);

        if (type === "rules") {
            const embed1 = new EmbedBuilder()
                .setColor(0xf7efdb)
                .setImage(
                    "https://media.discordapp.net/attachments/1020330308492611754/1485326614014197918/vxw7h.png",
                );

            const component1 = new ContainerBuilder().addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    "ㅤㅤ ㅤ ㅤ<:38887starfish:1487382049747636225>  follow   [terms](<https://discord.com/terms>)   /   [guidelines](<https://discord.com/guidelines>)\n-# ㅤㅤㅤ<:bubble2:1485542222823686215> most importantly, be __13+__ to stay in the server.\n\nㅤㅤ ㅤ ㅤ<:38887starfish:1487382049747636225>  no       slurs       /       derogatory       terms\n-# ㅤㅤㅤ<:bubble2:1485542222823686215> no hate speech allowed, even if reclaimable.\n-# ㅤㅤ <:bubble2:1485542222823686215> includes images, users, & nicknames.\n\nㅤ ㅤ ㅤㅤ<:38887starfish:1487382049747636225>  no      nsfw      /      disturbing      content\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> no tolerance to any graphic content.\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> any sexual intention to minors is an instant ban.\n\nㅤ ㅤ ㅤㅤ<:38887starfish:1487382049747636225>  respect    others'     boundaries\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> no bullying or hurtful / toxic jokes allowed.\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> do not leak anything about anyone.\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ \nㅤ ㅤ ㅤㅤ<:38887starfish:1487382049747636225>  staff     has     final     say\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> if you have any issues with staff, report to the owner.\n-#  ㅤㅤㅤ<:bubble2:1485542222823686215> do not try to bypass, or use look-alike words.",
                ),
            );

            await channel.send({
                content: `_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n   　　˚　　　.　　  ˚　　　.`,
            });
            await channel.send({
                embeds: [embed1],
            });
            await channel.send({
                content: `_ _\n_ _\n_ _\n_ _               \` \` [\`<・\`](<https://www.youtube.com/watch?v=k3cryiz8nJo>)   ࣭   ⋆.˚  ࿐༉ <:wave1:1486165311983194112><:wave2:1486165334854598859>\n_ _               𓇼𓇼 ゛ <:book1:1486157579267739948><:book2:1486157623362588692>   ࣪     <:mSabaBuoy:1486413073618042920>\n_ _\n_ _           [°‧ ](<https://www.youtube.com/watch?v=k3cryiz8nJo>)𓆝 𓆟 𓆞[ ·｡](<https://www.youtube.com/watch?v=k3cryiz8nJo>)\n_ _\n_ _`,
            });
            await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: [component1],
            });
            await channel.send({
                content: `_ _ [⠀](https://open.spotify.com/track/7HIJVvQnIvfwjBe684PSuq)\n_ _            <:mSaba:1486412984623300658>\n_ _`,
            });
        } else if (type === "colors") {
            const embed1 = new EmbedBuilder()
                .setColor(0xf7efdb)
                .setImage(
                    "https://media.discordapp.net/attachments/1020330308492611754/1485326046369808394/zvj9p.png?",
                );

            const component1 = new ContainerBuilder().addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://media.discordapp.net/stickers/1489404736590450798.gif?size=160&name=sabaSway&lossless=true",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            "-# _ _\n⠀⠀⠀𓈒⠀⠀<:mSabaCrown:1487385463231615007>⠀⠀⠀⠀<@&1490094785287946434>⠀⠀⠀\n⠀⠀⠀𓈒⠀⠀<:mSaba:1486412984623300658>⠀      [⋆](<https://www.youtube.com/watch?v=k3cryiz8nJo>)       ⠀<@&1490094788916150292>⠀⠀⠀\n⠀⠀⠀𓈒⠀⠀<:sabaCrab:1487385562301071410>⠀⠀⠀⠀<@&1490094792099631294>⠀⠀⠀\n",
                        ),
                    ),
            );

            const components2 = [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Secondary)
                        .setEmoji({
                            id: "1487385463231615007",
                            name: "mSabaCrown",
                        })
                        .setCustomId("starbutton"),
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji({
                            id: "1486412984623300658",
                            name: "mSaba",
                        })
                        .setCustomId("fishbutton"),
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setEmoji({
                            id: "1487385562301071410",
                            name: "sabaCrab",
                        })
                        .setCustomId("crabbutton"),
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Secondary)
                        .setLabel("⠀⠀⠀⠀⠀⊹ ࣪ ﹏﹏𓂁﹏⊹ ࣪ ˖⠀⠀⠀⠀⠀")
                        .setDisabled(true)
                        .setCustomId("sharkbutton"),
                ),
            ];

            const components3 = [
                new TextDisplayBuilder().setContent(
                    "_ _\n_ _           [°‧ ](<https://www.youtube.com/watch?v=k3cryiz8nJo>)𓆝 𓆟 𓆞[ ·｡](<https://www.youtube.com/watch?v=k3cryiz8nJo>)\n_ _\n_ _",
                ),
                new ActionRowBuilder().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("e11788dbf5ac4f1cc5f015ec1ffdc1ed")
                        .setPlaceholder("₍ ᐢ. .ᐢ₎　˙　more　!͟!")
                        .addOptions(
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color1")
                                .setEmoji({
                                    id: "1490146944058659076",
                                    name: "color1",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color2")
                                .setEmoji({
                                    id: "1490148896557502604",
                                    name: "color2",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color3")
                                .setEmoji({
                                    id: "1490148918250573996",
                                    name: "color3",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color4")
                                .setEmoji({
                                    id: "1490148948130664499",
                                    name: "color4",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color5")
                                .setEmoji({
                                    id: "1490148971707109436",
                                    name: "color5",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color6")
                                .setEmoji({
                                    id: "1490149029634641992",
                                    name: "color6",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color7")
                                .setEmoji({
                                    id: "1490149046088761496",
                                    name: "color7",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color8")
                                .setEmoji({
                                    id: "1490149061037129919",
                                    name: "color8",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color9")
                                .setEmoji({
                                    id: "1490149080779980800",
                                    name: "color9",
                                }),
                            new StringSelectMenuOptionBuilder()
                                .setLabel("◍◞◟）")
                                .setValue("color10")
                                .setEmoji({
                                    id: "1490149097590620310",
                                    name: "color10",
                                }),
                        ),
                ),
            ];

            await channel.send({
                content: `_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n   　　˚　　　.　　  ˚　　　.`,
            });
            await channel.send({
                embeds: [embed1],
            });
            await channel.send({
                content: `_ _\n_ _\n_ _\n_ _               \` \` [\`<・\`](<https://www.youtube.com/watch?v=k3cryiz8nJo>)   ࣭   ⋆.˚  ࿐༉ <:wave1:1486165311983194112><:wave2:1486165334854598859>\n_ _               𓇼𓇼 ゛ <:tone1:1487631536353181696><:tone2:1487631559002423306>   ࣪     <:mSabaBuoy:1486413073618042920>\n_ _\n_ _           [°‧ ](<https://www.youtube.com/watch?v=k3cryiz8nJo>)𓆝 𓆟 𓆞[ ·｡](<https://www.youtube.com/watch?v=k3cryiz8nJo>)\n_ _\n_ _`,
            });
            await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: [component1],
                allowedMentions: { parse: [] },
            });
            await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: components2,
            });
            await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: components3,
            });
            await channel.send({
                content: `_ _\n_ _\n_ _ [⠀](https://open.spotify.com/track/3FL7JZBjmgniRNiOP38oCA)\n_ _            <:mSaba:1486412984623300658>\n_ _`,
            });
        } else if (type === "logs") {
            const components = [
                new ContainerBuilder()
                    .addSectionComponents(
                        new SectionBuilder()
                            .setThumbnailAccessory(
                                new ThumbnailBuilder().setURL(
                                    "https://media.discordapp.net/attachments/1020330308492611754/1491468630292959323/987sd.png?ex=69d7cde7&is=69d67c67&hm=169bd0db8d0d91506e7c66f972c63f6e28ff0a6c76f2cfd82636115c74b36550&=&format=webp&quality=lossless&width=636&height=636",
                                ),
                            )
                            .addTextDisplayComponents(
                                new TextDisplayBuilder().setContent(
                                    "### _ _<:mSabaCrown:1487385463231615007>  ゛ \n### _ _  B o o s t P e r k s\n### _ _       ✧˖°  _ _",
                                ),
                            ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            "_ _⠀\n_ _   This channel is a b__oo__st **perk** ᵎᵎ\n_ _\n_ _ You get to read _edited_ / _deleted_ messages\n     here after you boost the server\n## _ _      [𓈒](<https://www.youtube.com/watch?v=k3cryiz8nJo>)",
                        ),
                    ),
            ];

            const msg = await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components: components,
            });
            await msg.react("1491470920169164911");
            await msg.react("1487385582509363292");
        }
    },
};
