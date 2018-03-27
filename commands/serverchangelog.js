const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("SADPS Server 1 Changelog")
    .setColor("#f4b042")
    .setThumbnail(sicon)
    .addField("**Improvement**", "You can now connect to the server by direct connecting to `s1-sadpsrp.ddns.net` 3/20/18 9:50 AM", true);

    message.channel.send(botembed);

}

module.exports.help = {
  name: "schangelog"
}
