# DeepSeek-Discord-Bot_node.js
deepseek discord bot in node.js

Node.js y le añadiremos funcionalidades como:

    Chat con DeepSeek (usando la API oficial o un wrapper).

    Personalidades personalizables (serio, divertido, técnico, etc.).

    Comandos de Discord (/chat, /personality, etc.).

    Historial de conversación (opcional).

# Requisitos

    Node.js (v18+).

    Una cuenta de Discord Developer para crear el bot.

    API Key de DeepSeek (si tienen API pública; si no, podemos simular respuestas).

# Estructura del Proyecto

```deepseek-discord-bot/
├── node_modules/
├── src/
│   ├── commands/       # Comandos de Discord (/chat, /personality)
│   ├── services/       # Lógica de DeepSeek API
│   ├── personalities/  # Archivos JSON con personalidades
│   ├── bot.js          # Configuración del bot
├── .env                # Variables de entorno (API KEY, TOKEN)
├── package.json
```

# Código Base
# 1. Instalar dependencias
basch 

```npm init -y```
```npm install discord.js axios dotenv```

# 2. Configurar .env
# 3. Archivo principal (bot.js)

# Registro de Comandos (deploy-commands.js)
Crea este archivo para registrar los comandos en Discord

```const { REST, Routes } = require('discord.js');
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
})();```
