const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
  {
    name: 'chat',
    description: 'Habla con DeepSeek',
    options: [{
      name: 'mensaje',
      description: 'Tu mensaje para DeepSeek',
      type: 3,  // STRING
      required: true,
    }],
  },
  {
    name: 'personality',
    description: 'Cambia la personalidad del bot',
    options: [{
      name: 'estilo',
      description: 'Estilo de personalidad (default, funny, technical)',
      type: 3,
      required: true,
    }],
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('🔨 Registrando comandos...');
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),  // Reemplaza con tu Client ID
      { body: commands },
    );
    console.log('✅ Comandos registrados!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
})();
