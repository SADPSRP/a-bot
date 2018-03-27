const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Insufficient Permissions!");
  let rMember = message. guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role")
  await(rMember.removeRole(gRole.id));

  try{
    rMember.send(`You were removed from the role "${gRole.name}".`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> -${gRole.name}. We tried to DM the user but DMs are locked!`)
  }
}

module.exports.help = {
  name: "removerole"
}
