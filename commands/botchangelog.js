const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("SADPS Bot Changelog")
    .setColor("#f4b042")
    .setThumbnail(sicon)
    .addField("[+]", "Added more 8ball answers", true)
    .addField("[+]", "Added a leveling system", true)
    .addField("[+]", "Added a coin system", true)
    .addField("[+]", "Added !level for leveling system", true)
    .addField("[+]", "Added !coins for coin system", true);

    message.channel.send(botembed);

}

module.exports.help = {
  name: "changelog"
}
