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
  SeparatorBuilder,
  SeparatorSpacingSize,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sendmsg")
    .setDescription("messages")
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
          { name: "roles", value: "roles" },
          { name: "colors", value: "colors" },
        ),
    ),
  async execute(interaction) {
    const type = interaction.options.getString("type");
    const channelId = interaction.options.getString("channel");

    const channel = interaction.guild.channels.cache.get(channelId);

    if (type === "roles") {
      const components = [
        new TextDisplayBuilder().setContent(
          "```ansi\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⢀⢠⡲⠝⡧⢧⠄\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⡀⠔⢁⢏⡖⠅⣲⣋⠆\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⣠⣎⠄⠊⠀⡌⠄⡞⡱⠁⠀\n⠀⠀⠀\u001b[2;37m⠐⡨⠋⢕⡀⠀\u001b[2;33m\u001b[2;37m⣀⣀⣀\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[0m⣴⠾⡻⠥⠀⢒⠈⣩⡾⠚⠁⠀⠀\n⠀⠀⠀\u001b[2;37m⠜⠀⢀⣾⡿⡮\u001b[0m\u001b[2;33m⠃⣡\u001b[0m\u001b[2;37m\u001b[0m⡾⠕⣊⣗⠠⠝⠒⠉⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀\u001b[2;37m⠈⣝⣗⡁⠀\u001b[2;33m⠟⠂⢩\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;37m\u001b[2;33m⡻\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;37m⠤⡉\u001b[0m\u001b[2;33m\u001b[2;37m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;33m\u001b[2;37m⢢\u001b[0m\u001b[2;33m\u001b[2;37m⡀\u001b[0m\u001b[2;33m\u001b[0m⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀\u001b[2;37m⢀⣠\u001b[0m\u001b[2;37m⢺\u001b[2;33m\u001b[2;37m⣼⣠⣄⣦⣼⠃\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;33m⢀\u001b[0m\u001b[2;33m⣸⢿\u001b[0m\u001b[2;33m\u001b[2;37m⢑⡀\u001b[0m\u001b[2;33m⠀⠀⠀\u001b[0m⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀\u001b[2;37m⢠⠟⠀⣾⠀⠀⠘⢗⣿\u001b[0m\u001b[2;33m⡶\u001b[0m\u001b[2;33m⠋\u001b[0m\u001b[2;33m⢁⣠⢿\u001b[0m\u001b[2;37m⢡\u001b[0m\u001b[2;33m⠀\u001b[0m⠀⠀⠀⠀⠀\n⠀⠀⠀\u001b[2;37m⠀⠹⡄⠀⢿⡀⠀⠀⢠⠟\u001b[0m\u001b[2;37m⡧\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;33m⠾⠛⠉\u001b[0m\u001b[2;33m⢀\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m⣾⠀\u001b[0m⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀\u001b[2;37m⠀⢻⠂⢠⡿\u001b[0m⠀\u001b[2;33m\u001b[2;37m⠙\u001b[0m\u001b[2;33m\u001b[2;37m⣧\u001b[0m\u001b[2;33m⡔⢊⡡\u001b[0m\u001b[2;37m⡻\u001b[0m⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀\u001b[2;37m⠞⠀⡎⠀\u001b[0m⠀⠀\u001b[2;33m\u001b[2;37m⠈\u001b[0m\u001b[2;33m\u001b[2;37m⠙⠳⣾⠃\u001b[0m\u001b[2;33m\u001b[0m⠀⠀⠀⠀⠀⠀\n```",
        ),
        new TextDisplayBuilder().setContent(
          "‎                                                                          **M4TUR1TY - CL4SS**",
        ),
        new TextDisplayBuilder().setContent(
          "```ansi\n\n                                   ST4GE  0O1  [ \u001b[2;37m++16 \u001b[0m\u001b[2;37m成熟期\u001b[0m\u001b[2;30m\u001b[2;31m\u001b[2;37m \u001b[0m\u001b[2;31m\u001b[0m\u001b[2;30m\u001b[0m]\n                                   ST4GE  O02  [ \u001b[2;37m++18\u001b[0m \u001b[2;37m成年者\u001b[0m ]\n                                   F1N4L  F0RM [ \u001b[2;37m++21\u001b[0m \u001b[2;30m\u001b[0m\u001b[2;37m年長者\u001b[0m ]\n```",
        ),
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("++16")
            .setCustomId("16"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("++18")
            .setCustomId("18"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("++21")
            .setCustomId("21"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("╱╱⠀╱╱‎ ‎ ")
            .setDisabled(true)
            .setCustomId("5f352639517647ead6c2ae7254cfcb2e"),
        ),
        new SeparatorBuilder()
          .setSpacing(SeparatorSpacingSize.Small)
          .setDivider(true),
        new TextDisplayBuilder().setContent(
          "```ansi\n\u001b[2;37m⠀⠀⠀⠀⠀⠀⣀⣠⡤⡤⣤⠄⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⡠⢖\u001b[2;33m⢋⣌⣤\u001b[0m\u001b[2;37m⣥⣮\u001b[2;33m\u001b[2;32m\u001b[2;33m⣷⣨\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m⢑⡏⣢⡀⠀⠀⠀⠀⠀⠀\n⠀⠀⡐⣋\u001b[2;33m\u001b[2;32m\u001b[2;33m⣙⣿\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[2;33m⢟\u001b[0m\u001b[2;37m⣿⣿⣿⣿\u001b[2;33m\u001b[2;32m\u001b[2;33m⣿⣿⣮\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m⣿⣷⢤⣄⠀⠀⠀⠀\n⣴⣷⡫⢝⣿⣿⡿⠋⠁⠀⠈⠙⢿⣿⣿\u001b[2;32m\u001b[2;33m⡿⣿\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;37m⣿⣲⠤⢤⠀\n⠸⣿\u001b[2;33m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[2;33m⣔⠩\u001b[0m\u001b[2;37m⣿⣿⣥⣤⡀⠀⠀⠀⣾⠟⠿⣯⣿⣿⣿⣴⣫⡄\n⠀⢹\u001b[2;33m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[2;33m⣧⢀⣿\u001b[0m\u001b[2;37m⣿⠛⠙⣗⣤⡄⠀⣿⣄⠀⠀⠈⠛⠋⠛⠋⠀\n⠀⠘⣷\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[2;32m\u001b[0m\u001b[2;37m\u001b[2;33m⣿\u001b[0m\u001b[2;37m⠹⣧⠀⠀⠙⠟⠙⠀⠙⠻⡆⠀⠀⠀⠀⠀⠀⠀\u001b[0m\n⠀\u001b[2;37m⠀⠹⣯⡀⣻\u001b[2;33m⢦\u001b[0m\u001b[2;37m⡀\u001b[0mTYP3 F [\u001b[2;35mFemale⠀女\u001b[0m]\n⠀⠀⠀\u001b[2;37m⠙⠿\u001b[2;33m⣯⣤\u001b[0m\u001b[2;37m\u001b[2;33m\u001b[2;32m\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m⠎⢷⢤\u001b[0mTYP3 M [\u001b[2;34mMale 男\u001b[0m]\n⠀⠀⠀⠀⠀\u001b[2;37m\u001b[2;33m\u001b[2;37m⠈\u001b[0m\u001b[2;33m\u001b[0m\u001b[2;37m⠙⠿⣿⣌⡍⠢\u001b[0mNULL [\u001b[2;37mUnknown 未知\u001b[0m]\n\u001b[2;37m⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;32m\u001b[2;33m⡗⣿\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;37m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[2;33m\u001b[0m\u001b[2;37m\u001b[0m\u001b[2;37m\u001b[2;33m\u001b[0m\u001b[2;37m⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀\n⢀⠆⠀⠀⠀⠀⠀⠀⠀⠀\u001b[2;33m⢸\u001b[0m\u001b[2;37m\u001b[2;32m\u001b[2;33m⣟\u001b[0m\u001b[2;32m\u001b[2;33m\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;37m⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀\n\u001b[2;32m\u001b[2;33m⣾\u001b[0m\u001b[2;32m⡀\u001b[0m\u001b[2;37m⠀⠀⠀⠀⠀⠀⠀⢀⣼⢗⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀\n⠘⣷⣤⣄⣀⣀⡠⣤\u001b[2;32m\u001b[0m\u001b[2;37m\u001b[2;33m⣖⣡⡾\u001b[0m\u001b[2;37m\u001b[2;32m\u001b[0m\u001b[2;37m⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠉\u001b[2;32m\u001b[2;33m⠛⠚⠛\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;37m⠋⠛⠉\u001b[0m\u001b[2;37m⠁\u001b[0m⠀⠀⠀⠀⠀⠀⠀⠀⠀\n```",
        ),
        new TextDisplayBuilder().setContent(
          "‎                                                                                  **CL4SS1FIC4TION**                                                                 ",
        ),
        new TextDisplayBuilder().setContent(
          "```ansi\n\u001b[2;37m‎                                                                          尊敬に性別は関係ない。\u001b[0m\n```",
        ),
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Danger)
            .setLabel("Female⠀女")
            .setCustomId("female"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Primary)
            .setLabel("Male⠀男")
            .setCustomId("male"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("Unknown 未知")
            .setCustomId("unknown"),
        ),
      ];

      await channel.send({
        flags: MessageFlags.IsComponentsV2,
        components: components,
      });
    } else if (type === "colors") {
      const components = [
        new TextDisplayBuilder().setContent(
          "```ansi\n\u001b[2;33m⣧⢮⢭⠛⢲⣦⣀\u001b[0m⠀⠀⠀⠠⡀ \u001b[2;37mR3D;00\u001b[0m\u001b[2;31m1\u001b[0m \u001b[2;31m真紅\u001b[0m\n\u001b[2;33m⠈⠻⣶\u001b[0m\u001b[2;37m⡛⠲⣄\u001b[0m⠀\u001b[2;33m⠙⠢⣀\u001b[0m⠀⢇   \u001b[2;37mGR3N;00\u001b[0m\u001b[2;32m2 新緑\u001b[0m\n⠀⠀\u001b[2;33m⢻⣿\u001b[0m\u001b[2;37m⣥⡬⠽⠶⠤⣌\u001b[0m\u001b[2;33m⣣\u001b[0m⣼⡔⠊⠁ \u001b[2;37mBLU3;00\u001b[0m\u001b[2;34m3⠀青色\u001b[0m\n⠀⠀\u001b[2;33m⢠⣿\u001b[0m\u001b[2;37m⣧⣤⡴⢤⡴\u001b[0m⣶⣿⣟\u001b[2;33m⢯\u001b[0m\u001b[2;33m⡙⠒⠤⡀\u001b[0m\n⠀⠀\u001b[2;33m⠘⣗\u001b[0m\u001b[2;37m⣞⣢⡟⢋\u001b[0m⣼⣿⣿⡿\u001b[2;37m⡄⢻⡮⣄\u001b[0m\u001b[2;33m⠈\u001b[0m\u001b[2;33m⠳⢦⡀\u001b[0m\n⠀⠀⠀\u001b[2;33m⠈⠻⠮⠴⠵\u001b[0m⣿⣿⡿\u001b[2;37m⣷⢳⡀⢱\u001b[2;33m\u001b[0m\u001b[2;37m⡈⢋⠛⣄\u001b[0m\u001b[2;33m⣹⣲⡀\u001b[0m\n⠀⠀⠀⠀⠀⠀⠀⠀\u001b[2;33m⠈⢿⣱⡇\u001b[0m\u001b[2;37m⣦⢾\u001b[0m\u001b[2;33m⣾⠿⠟⠿⠷⠷⣻⠧\u001b[0m\n⠀⠀⠀⠀⠀⠀⠀⠀⠀\u001b[2;33m⠈⠙⠻⠽⠞⠊\u001b[0m\n```",
        ),
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("1⠀真紅")
            .setCustomId("1"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("2⠀新緑")
            .setCustomId("2"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("3⠀青色")
            .setCustomId("3"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel(" ・・・ ‎ ")
            .setDisabled(true)
            .setCustomId("43e1633b13ad4f2bf08053250a8e7175"),
        ),
        new TextDisplayBuilder().setContent("⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀**P4LET7E**"),
        new TextDisplayBuilder().setContent(
          "```ansi\n       \u001b[2;37mP1NK;00\u001b[0m\u001b[2;35m4⠀桜色\u001b[0m     ⢔⣶⠀⠀\n  \u001b[2;37mH0N3Y;00\u001b[0m\u001b[2;33m5\u001b[0m⠀\u001b[2;33m橙色\u001b[0m     ⠀ ⡼\u001b[2;34m⠗⡿\u001b[0m⣾⠀⠀\n\u001b[2;37mTE4L;00\u001b[0m\u001b[2;32m\u001b[0m\u001b[2;36m6⠀青緑\u001b[0m⠀⠀    ⠀⢀⡼\u001b[2;34m⠓⡞⢩\u001b[0m⣯⡀⠀\n    ⠀⣀⣀⣀⣀⣀⠀⠀⠀⠀\u001b[2;37m⢻\u001b[0m⠀\u001b[2;37m⠰\u001b[0m⡹\u001b[2;34m⠁⢰⠃⣩\u001b[0m\u001b[2;34m⣿\u001b[0m⡇⠀\n    ⠘⢷\u001b[2;34m⣿⠿\u001b[0m\u001b[2;34m⣉\u001b[0m\u001b[2;34m⣩\u001b[0m⠛⠲⢶⡠\u001b[2;37m⢷\u001b[0m\u001b[2;37m⠐⣣\u001b[0m\u001b[2;34m⠃⣰⠗⠋⢀\u001b[0m⣯⠁⠀\n    ⠀⠀⠙⣯\u001b[2;34m⣠⠬⠦⢤⣀⠈\u001b[0m⠓\u001b[2;37m⢽⣾\u001b[0m\u001b[2;34m⢔⣡⡴⠞⠻⠙\u001b[0m⢳⡄\n    ⠀⠀⠀⠘⣵\u001b[2;34m⣳⠖⠉⠉⢉⣩\u001b[0m\u001b[2;37m⣵⣿⣿\u001b[0m\u001b[2;34m⣒⢤⣴⠤⠽\u001b[0m⣬⡇\n  ⠀  ⠀⠀⠀⠈⠙⢻\u001b[2;34m⣟⠟⠋⢡⡎\u001b[0m\u001b[2;37m⢿⢿\u001b[0m\u001b[2;34m⠳\u001b[0m\u001b[2;34m⡕⢤⡉⡷\u001b[0m⡽⠁\n    ⠀⠀⠀⠀⠀⠀⡾\u001b[2;34m⣥⣏⣖⡟⠸\u001b[0m⢺⠀⠀⠈⠙⠋⠁⠀⠀\n⠀  ⠀⠀  ⠀⠀⠀⠘⠿⣯⣮⢦⠶⠃⠀⠀⠀⠀⠀⠀⠀⠀\n```",
        ),
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("・・・")
            .setDisabled(true)
            .setCustomId("fd0570495b7f41e0b800681bf47dd469"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("4⠀桜色")
            .setCustomId("4"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("5⠀橙色")
            .setCustomId("5"),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel("6⠀青緑")
            .setCustomId("6"),
        ),
      ];

      await channel.send({
        content: `_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _\n_ _`,
      });
      await channel.send({
        flags: MessageFlags.IsComponentsV2,
        components: components,
      });
    }
  },
};
