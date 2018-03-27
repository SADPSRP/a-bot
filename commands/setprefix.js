const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

         prefixes[message.guild.id] = {
           prefixes: args[0]
         };

     if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Insufficient Permissions");
     if(!args[0] || args[0 == "help"]) return message.reply(`Usage: setprefix <desired prefix here>`);




     fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
       if (err) console.log(err)
     });

     let sEmbed = new Discord.RichEmbed()
     .setColor("#e9ff00")
     .setTitle("Prefix Set!")
     .setDescription(`Set to ${args[0]}`);


     message.channel.send(sEmbed);
}

module.exports.help = {
  name: "setprefix"
}
