const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#ffff00")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username, true)
    .addField("Created On", bot.user.createdAt, true)
    .addField("Created By:", "Zach#6228", false);

    message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
