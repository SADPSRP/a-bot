const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
        .setAuthor("SADPS", "https://image.ibb.co/bKRVVH/BOTIMAGE.png")
        .setTitle("CAD Information")
        .setColor("4286f4")
        .setThumbnail("https://image.ibb.co/kfuHAH/SERVERIMAGE.png")
        .setDescription("**Read Below!**")
        .addField("CAD/MDT Link", "[SADPS CAD](https://sadpsrp-mdt.bubbleapps.io)")
        .addField("**Imporatant Info**", "__**Your password must contain 1 or more Uppercase character(s) and 1 or more Number(s)**__")
        .addField("**Access Password**", "`sadps`")
        .addField("**Approval**", "Approval process could take up to 24-72hours!")
        .addField("**After Requesting Access**", "After you have requested access reply to this channel with the following format")
        .addField("**Approval Format**", "**Name Used**: \n**Email Used**:  \n**Departments Selected**: ")
        .setFooter("SADPS", "https://image.ibb.co/bKRVVH/BOTIMAGE.png")
    message.channel.send(embed);

}

module.exports.help = {
  name: "cadinfo"
}
