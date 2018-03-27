const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {


       if(!args[2]) return message.reply("Please ask a full question!");
       let replies = ["Yes.", "No.", "I don't know.", "Ask again later", "Unclear, ask again later", "Soon", "Absolutely!", "Never", "Magic 8-ball is currently unavailable, please leave a message after the tone. \\*beep\\*", "When you are ready", "Hopefully", "Hopefully not", "Oh my, why would you even ask that!", "What kind of a question is that?", "Over my dead body!", "Haha, funny joke"];

       let result = Math.floor((Math.random() * replies.length));
       let question = args.slice(0).join(" ");

       let ballembed = new Discord.RichEmbed()
       .setAuthor(message.author.tag)
       .setColor("#000000")
       .addField("Question: ", question)
       .addField("Answer: ", replies[result])

       message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
