const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("SADPS Server 1 Started")
    .setColor("#00ff11")
    .setThumbnail(sicon)
    .addField("**Started**", "Server is up and safe to connect to!", true);

    message.channel.send(botembed);

}

module.exports.help = {
  name: "sstarted"
}
