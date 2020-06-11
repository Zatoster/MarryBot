require("dotenv").config();
const   Discord  = require('discord.js')
const   bot = new Discord.Client()

//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Le bot est connecté");
    bot.guilds.cache
        .get("230405441845329930")
        .members.cache.get("436998656491651072")
        .setNickname("Belph goes brrrrrrr")
        .then(
            (res) => {},
            (rej) => {
                console.log(rej);
            }
        );

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
    if (message.content.includes('brrr')) {
        message.channel.send('Brrrrrrrrrrrrrrrrr');
    }
})


// Utiliser un fichier .env à passer en gitignore pour garder le token du bot privé
bot.login(process.env.BOT_ID);