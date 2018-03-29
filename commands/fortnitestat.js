const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const apikey = require("../keys.json");
const Fornite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot, message, args) => {
     

     
     let username = args[0];
     let platform = args[1] || "pc";

     let data = ft.getInf(username, platform).then(data => {
       
       console.log(data);



     }).catch(e => {
       console.log(e);
       message.channel.send("Couldn't find that username in the fortnite database");
     });

}

module.exports.help = {
  name: "fortnite"
}
