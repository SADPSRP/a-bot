const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed2 = new Discord.RichEmbed()
  .setColor("#ffff00")
  .addField("Prefix: ", "!")

  message.channel.send(embed2);

}

module.exports.help = {
  name: "prefix"
}
