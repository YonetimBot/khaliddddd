const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Khalid Sizlerle")
.setTitle(" Khalid Bot Kullanıcı Komutları ")
 .setTimestamp()
.setDescription("**n!atatürk** : Mustafa Kemal Atatürkü Anıyoruz \n **n!kısalt** : İstediğiniz Linki Kısaltır \n**n!avatar** = Avatarınıza bakarsınız.  \n  **n!nuke**: Kanalı siler komple ve yeniden oluşturur \n**n!yetkilerim** = Yetkilerini görürsün. \n  **n!profil** = Profilini görürsün.  \n **n!sunucuresmi** = Sunucu resmini gösterir.  \n **n!ping** = Botun Pingine Bakarsın. \n **m!id** = Birisinin id'sine Bakarsın. \n  **n!davet** = Beni Sunucuna Ekle.  \n  **n!botbilgi** = Bot istatistiklerini görürsünüz. \n  **n!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}