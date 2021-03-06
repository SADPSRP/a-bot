const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Insufficient Permissions!")
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person is a admin and cannot be banned")

    let banEmbed= new Discord.RichEmbed()
    .setTitle("Ban")
    .setColor("#ff0000")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time Banned", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "incidents")
    if(!banChannel) return message.channel.send("Can't find incidents channel")

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
