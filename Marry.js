require("dotenv").config();
const   Discord  = require('discord.js')
const   bot = new Discord.Client()

//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Le bot est connecté");
})
bot.on('message', message => {
    if (message.content.includes('victime')) {
        message.channel.send('Press **F** to pay respect...');
    }
    if (message.content.includes('Yaoi')) {
        message.channel.send('Non.');
    }
    if (message.content.includes('YAOI')) {
        message.channel.send('NON.');
    }
    if (message.content.includes('yaoi')) {
        message.channel.send('Non.');
    }
})

// Utiliser un fichier .env à passer en gitignore pour garder le token du bot privé
bot.login(process.env.BOT_ID);