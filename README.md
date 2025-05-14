# DeepSeek-Discord-Bot_node.js
deepseek discord bot in node.js

Node.js y le añadiremos funcionalidades como:

    Chat con DeepSeek (usando la API oficial o un wrapper).

    Personalidades personalizables (serio, divertido, técnico, etc.).

    Comandos de Discord (/chat, /personality, etc.).

    Historial de conversación (opcional).

# 1. Requisitos

    Node.js (v18+).

    Una cuenta de Discord Developer para crear el bot.

    API Key de DeepSeek (si tienen API pública; si no, podemos simular respuestas).

# 2. Estructura del Proyecto

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
basch 

```npm init -y

   npm install discord.js axios dotenv```

