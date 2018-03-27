const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.RichEmbed()
         .setAuthor("SADPS Information", "https://image.ibb.co/kfuHAH/SERVERIMAGE.png")
         .setDescription("Information about SADPS you should probably know!")
         .setColor("4286f4")
         .setThumbnail("https://image.ibb.co/kfuHAH/SERVERIMAGE.png")
         .addField("Server Information", "Server 1: `192.154.213.202:30120` \nServer 2: `Coming Soon™`")
         .addField("**Imporatant Info**", "__**Your password must contain 1 or more Uppercase character(s) and 1 or more Number(s)**__")
         .addField("**Public Cops/Fire & EMS Info**", "Coming Soon™")
         .addField("Forums Page", "[Forums](https://san-andreas-dps-rp.enjin.com/forums)")
         .addField("**Reporting**", "While in-game you can use /report to notify ingame staff about the issue. Letting staff out of game is Coming Soon™")
         .addField("**CAD + MDT System**", "[CAD/MDT](https://sadpsrp-mdt.bubbleapps.io) \nAccess Password: `sadps` \n\u200b\u200b \nOnce you select/request your departments, go in <#424358951665270804> and tag <@&424558029309083648>")
         .addField("**Community Policies/Rules**", "[Rules](https://docs.google.com/document/d/1nGTk6uP-fK8D-GaiC6oof6Nr4TyGNFgKfp2akKa-3f0/edit?usp=sharing)")
         .setTimestamp()
         .setFooter("SADPS")
     message.channel.send(embed);

}

module.exports.help = {
  name: "information"
}
