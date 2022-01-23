const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Khalid sizlerle")
.setTitle(" Khalid Ayarlanabilir abone sistemi komutları" )
 .setTimestamp()
.setDescription("**n!abone** : etiketlediğiniz kişiye abone rolü verir \n  **n!abonerol** : Etiketlediğiniz rol abone rolüolarak atanır \n **n!abone-yetkili-rol** : Etiketlediğiniz rol abone Yetkilisi rolü olarak atanıcak \n  **n!abonelog** : Etiketlediğiniz kanal abone log kanalı olarak atanıcak ")
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
  name: 'abonerolsistemi',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'abonerolsistemi'
}