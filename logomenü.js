const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Khalid Sizlerle")
.setTitle("  Khalid logo menü komutları ( Türkçe Karakter Kullanmayınız )" )
 .setTimestamp()
.setDescription("**n!alev** : Alev Logo Yapar \n **n!altın** : Altın Logo Yapar \n **n!anime** : Anime Logo Yapar \n **n!arrow** : Arrow Logo Yapar \n **n!banner** : Banner Logo Yapar  \n **n!basit** : Basit Logo Yapar \n  **n!elmas** : Elmas Logo Yapar \n **n!green** : Green Logo Yapar \n  **n!habbo** Hobbo Logo Yapar \n **n!kalın** : Kalın Logo Yapar \n  **n!neonmavi** : NeonMavi Logo Yapar \n **n!sarı** : Sarı Logo Yapar \n ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}