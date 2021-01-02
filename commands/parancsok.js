module.exports = 
{
    name: "parancsok",
    execute(msg,args,Discord)
    {
        var profil = new Discord.RichEmbed()
        .setTitle("Parancsok","\u200B")
        .addBlankField()
        .addField("!ping","\u200B")
        .addField("!csicskít <tag/text>","\u200B")
        .addField("!profil","\u200B")
        .addField("!twitch","\u200B")
        .setColor("#FF0000");
        msg.channel.send(profil);
    }
}