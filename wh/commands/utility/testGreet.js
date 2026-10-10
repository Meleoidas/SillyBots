const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  InteractionContextType,
  MessageFlags,
} = require("discord.js");
const {
  getWelcomeComponents,
  welcomeChoices,
} = require("../../utils/WelcomeEmbed.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testgreet")
    .setDescription("testin")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setContexts(InteractionContextType.Guild)
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("type shit")
        .addChoices(
          { name: "1", value: "1" },
          { name: "2", value: "2" },
          { name: "3", value: "3" },
          { name: "all", value: "all" },
        ),
    ),
  async execute(interaction) {
    const welcome = interaction.guild.channels.cache.get(interaction.channelId);

    const type = interaction.options.getString("type");
    let lastType;

    if (type === "all")
      return welcomeChoices.forEach(async (message) => {
        const components = getWelcomeComponents(interaction, message.type);
        const msg = await welcome.send({
          flags: MessageFlags.IsComponentsV2,
          components: components,
        });
      });

    if (type) {
      lastType = "";
    }

    const components = getWelcomeComponents(interaction, type);

    const msg = await welcome.send({
      flags: MessageFlags.IsComponentsV2,
      components: components,
    });
  },
};
