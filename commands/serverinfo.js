const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#ffff00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined On", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);

}

module.exports.help = {
  name: "serverinfo"
}
