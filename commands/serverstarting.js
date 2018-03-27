const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("SADPS Server 1 Starting")
    .setColor("#f4b042")
    .setThumbnail(sicon)
    .addField("**Startup**", "Server is starting up please wait this could take up to 3 minutes", true);

    message.channel.send(botembed);

}

module.exports.help = {
  name: "sstarting"
}
