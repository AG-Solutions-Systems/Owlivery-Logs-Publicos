const { IntentsBitField } = require('discord.js');
const intents = new IntentsBitField();

module.exports = intents.add(
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessageTyping,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.GuildEmojisAndStickers,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildInvites,
    // IntentsBitField.Flags.GuildMembers, // Privileged Gateway Intents
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.GuildMessages,
    // IntentsBitField.Flags.GuildPresences, // Privileged Gateway Intents
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildScheduledEvents,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.Guilds,
    // IntentsBitField.Flags.MessageContent // Privileged Gateway Intents
);