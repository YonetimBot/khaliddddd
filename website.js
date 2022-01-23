const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(" Burdan Websitemize Ulaşabilirsiniz ")
  .setDescription("[__**WebSite**__](https//:boran.epizy.com)")
  .setFooter('Websitemizi Ziyaret ettiğin için teşekkürler..')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'website',
  description: '',
  usage: ''
};