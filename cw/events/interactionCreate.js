const { Events, MessageFlags } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) {
                console.error(`No ${interaction.commandName} found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.log(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: "Error executing the command",
                        flags: MessageFlags.Ephemeral,
                    });
                } else {
                    await interaction.reply({
                        content: "Error executing the command",
                        flags: MessageFlags.Ephemeral,
                    });
                }
            }
        } else if (interaction.isAutocomplete()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) {
                console.error(`No ${interaction.commandName} found.`);
                return;
            }

            try {
                await command.autocomplete(interaction);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.isButton()) {
            const command = interaction.client.buttons.get(interaction.customId) || interaction.client.buttons.get(interaction.customId.split(":")[0]);
            if (!command) {
                console.error(`No ${interaction.customId} found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.log(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: "Error executing the command",
                        flags: MessageFlags.Ephemeral,
                    });
                } else {
                    await interaction.reply({
                        content: "Error executing the command",
                        flags: MessageFlags.Ephemeral,
                    });
                }
            }
        } else if (interaction.isStringSelectMenu()) {
            for (const customId of interaction.values) {
                const command = interaction.client.buttons.get(customId);
                if (!command) {
                    console.error(`No ${customId} found.`);
                    return;
                }

                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.log(error);
                    if (interaction.replied || interaction.deferred) {
                        await interaction.followUp({
                            content: "Error executing the command",
                            flags: MessageFlags.Ephemeral,
                        });
                    } else {
                        await interaction.reply({
                            content: "Error executing the command",
                            flags: MessageFlags.Ephemeral,
                        });
                    }
                }
            }
        }
    },
};
