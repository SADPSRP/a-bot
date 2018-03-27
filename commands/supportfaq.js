const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
        .setAuthor("SADPS", "https://image.ibb.co/bKRVVH/BOTIMAGE.png")
        .setTitle("Frequently Asked Support Related Questions")
        .setColor("4286f4")
        .setThumbnail("https://image.ibb.co/kfuHAH/SERVERIMAGE.png")
        .addField("Q: My game is having loading issues", "A: The most common answer to this will be either to re-install fivem or uninstall any graphics mods you might have!")
        .addField("Q: Im stuck on a blue screen with a city", "A: The most likely answer is going to be to clear your cache and restart fivem")
        .setFooter("SADPS", "https://image.ibb.co/bKRVVH/BOTIMAGE.png")
    message.channel.send(embed);

}

module.exports.help = {
  name: "supportfaq"
}
