const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let sicon = message.guild.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Grand Opening of SADPS Arma 3 Servers")
  .setColor("#f4b042")
  .addField("**I am happy to announce the opening of a Arma 3 Server which will be a milsim/war type of server, In the future we plan to launch a Life server on Arma 3**", "\u200b", true)
  .setFooter("-SADPS Administration & Development Team,", "\u200b")
  .setTimestamp();
  
  message.channel.send(botembed);

}

module.exports.help = {
  name: "a3go"
}
