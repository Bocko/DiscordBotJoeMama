const { EmbedBuilder } = require('discord.js');

module.exports = 
{
    name: "status",
    execute(msg, args, BadWordUserslist, bot, fing, filter)
    {
        console.log(`status itt:"${msg.channel.name}"`);
        var status = new EmbedBuilder()
        .setTitle("Joe Mama Status","\u200B")
        .addFields(
            { name: "Filter Status", value: filter ? "ON":"OFF"},
            { name: "Fing Status", value: fing ? "ON": "OFF"});

        msg.channel.send({embeds: [status]});
    }
}