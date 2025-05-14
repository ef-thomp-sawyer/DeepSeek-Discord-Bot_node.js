const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Personalidades (ejemplo)
const personalities = {
  default: { name: "Asistente", tone: "neutral" },
  funny: { name: "DeepSeek Bromista", tone: "witty" },
  technical: { name: "DeepSeek Técnico", tone: "precise" },
};

let currentPersonality = personalities[process.env.DEFAULT_PERSONALITY];

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} listo!`);
});

// Comando /chat [mensaje]
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'chat') {
    const userMessage = interaction.options.getString('mensaje');
    await interaction.deferReply();

    try {
      // Simulación de respuesta de DeepSeek (reemplazar con API real)
      const botResponse = await mockDeepSeekAPI(userMessage, currentPersonality.tone);
      await interaction.editReply(`${currentPersonality.name}: ${botResponse}`);
    } catch (error) {
      await interaction.editReply("❌ Error al contactar a DeepSeek.");
    }
  }

  // Comando /personality [estilo]
  if (interaction.commandName === 'personality') {
    const newPersonality = interaction.options.getString('estilo');
    if (personalities[newPersonality]) {
      currentPersonality = personalities[newPersonality];
      await interaction.reply(`✅ Personalidad cambiada a: **${currentPersonality.name}**`);
    } else {
      await interaction.reply("❌ Personalidad no válida. Opciones: default, funny, technical");
    }
  }
});

// Función mock para DeepSeek (simula respuestas)
async function mockDeepSeekAPI(message, tone) {
  const responses = {
    neutral: `Has dicho: "${message}". Interesante.`,
    witty: `"${message}"? ¡Buena esa! *inserta meme aquí*`,
    precise: `Análisis de tu mensaje: "${message}". Longitud: ${message.length} caracteres.`,
  };
  return responses[tone] || responses.neutral;
}

client.login(process.env.DISCORD_TOKEN);
