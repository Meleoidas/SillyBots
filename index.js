const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
const { connectDB } = require("./db");
dotenv.config();
const token = process.env.TOKEN_CW;

const clientCw = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

clientCw.commands = new Collection();
const foldersPath = path.join(__dirname, "cw/commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ("data" in command && "execute" in command) {
            clientCw.commands.set(command.data.name, command);
        } else {
            console.log(
                `[WARNING] command: ${filePath} - missing "data" or "execute" prop`,
            );
        }
    }
}

clientCw.messageCommands = [];
const messageFoldersPath = path.join(__dirname, "cw/messageCommands");
const messageCommandFolders = fs.readdirSync(messageFoldersPath);

for (const folder of messageCommandFolders) {
    const commandsPath = path.join(messageFoldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ("execute" in command) {
            clientCw.messageCommands.push(command);
        } else {
            console.log(
                `[WARNING] messageCommand: ${filePath} - missing "execute" prop`,
            );
        }
    }
}

clientCw.buttons = new Collection();
const buttonsFolderPath = path.join(__dirname, "cw/buttons");
const buttons = fs.readdirSync(buttonsFolderPath);

for (const button of buttons) {
    const filePath = path.join(buttonsFolderPath, button);
    const command = require(filePath);
    if ("customId" in command && "execute" in command) {
        clientCw.buttons.set(command.customId, command);
    } else {
        console.log(`[WARNING] button: ${filePath} - missing "execute" prop`);
    }
}

const eventsPath = path.join(__dirname, "cw/events");
const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        clientCw.once(event.name, (...args) => event.execute(...args));
    } else {
        clientCw.on(event.name, (...args) => event.execute(...args));
    }
}

clientCw.login(token);

// -----

const tokenWh = process.env.TOKEN_WH;

const clientWh = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

clientWh.commands = new Collection();
const foldersPathWh = path.join(__dirname, "wh/commands");
const commandFoldersWh = fs.readdirSync(foldersPathWh);

for (const folder of commandFoldersWh) {
    const commandsPath = path.join(foldersPathWh, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ("data" in command && "execute" in command) {
            clientWh.commands.set(command.data.name, command);
        } else {
            console.log(
                `[WARNING] command: ${filePath} - missing "data" or "execute" prop`,
            );
        }
    }
}

clientWh.messageCommands = [];
const messageFoldersPathWh = path.join(__dirname, "wh/messageCommands");
const messageCommandFoldersWh = fs.readdirSync(messageFoldersPathWh);

for (const folder of messageCommandFoldersWh) {
    const commandsPath = path.join(messageFoldersPathWh, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ("execute" in command) {
            clientWh.messageCommands.push(command);
        } else {
            console.log(
                `[WARNING] messageCommand: ${filePath} - missing "execute" prop`,
            );
        }
    }
}

clientWh.buttons = new Collection();
const buttonsFolderPathWh = path.join(__dirname, "wh/buttons");
const buttonsWh = fs.readdirSync(buttonsFolderPathWh);

for (const button of buttonsWh) {
    const filePath = path.join(buttonsFolderPathWh, button);
    const command = require(filePath);
    if ("customId" in command && "execute" in command) {
        clientWh.buttons.set(command.customId, command);
    } else {
        console.log(`[WARNING] button: ${filePath} - missing "execute" prop`);
    }
}

const eventsPathWh = path.join(__dirname, "wh/events");
const eventFilesWh = fs
    .readdirSync(eventsPathWh)
    .filter((file) => file.endsWith(".js"));

for (const file of eventFilesWh) {
    const filePath = path.join(eventsPathWh, file);
    const event = require(filePath);
    if (event.once) {
        clientWh.once(event.name, (...args) => event.execute(...args));
    } else {
        clientWh.on(event.name, (...args) => event.execute(...args));
    }
}

clientWh.login(tokenWh);
connectDB();
