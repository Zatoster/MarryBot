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
    content = message.content.toLowerCase()
    if (content.includes('!marry')) {
        message.channel.send('Je suis en ligne !');
    }
    if (content.includes('victime')) {
        message.channel.send('Press **F** to pay respect...');
    }
    if (content.includes('yaoi')) {
        message.channel.send('Non.');
    }
    if (message.content.includes('brrr')) {
        message.channel.send('Brrrrrrrrrrrrrrrrr');
    }
    if (message.content.startsWith('<:redbeansoup:464529611292934156>') && message.content.endsWith('<:redbeansoup:464529611292934156>')) {
        message.delete();
        message.channel.send('<:Marry:468131506733187112>');
    }
})


// Utiliser un fichier .env à passer en gitignore pour garder le token du bot privé
bot.login(process.env.BOT_ID);