const Discord = require("discord.js");
const fs = require("fs");

module.exports = 
{
    cmdSetuper(bot)
    {
        console.log(`commandok setupja`);
        bot.commands = new Discord.Collection();
        const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
        for(var f of commandFiles)
        {
            var command = require(`../commands/${f}`);
            bot.commands.set(command.name, command);
        }
    }
}