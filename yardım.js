const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setImage("")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `n!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `n!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `n!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `Komutlar`,
      `
 
 | **n!eğlence:** Eğlence Menüsüne Bakarsınız.
 | **n!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız.
 | **n!kullanıcı:** Kullanıcı komutlarını görürsünüz.
 | **n!logomenü:** Botun Logo Yapma Komutlarına Bakarsınız.
 | **n!abonerolsistemi:** Ayarlanabilir abone rol sistemi 
 | **n!website:** Botumun Web Sİtesine Ulaşabilirsiniz.  

`)



    .addField(
      `Bilgilendirme`,
      `
 | **Khalid Bot Her Gün Güncelleniyor!**.
 | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/QGhVz6vG) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=934385086969815040&permissions=8&scope=bot) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};


exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
