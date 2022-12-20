module.exports = 
{
    name: "parancsok",
    execute(msg,args,Discord,myTag,BadWordUserslist,bot)
    {
        console.log(`parancsok itt:"${msg.channel.name}"`);
        var profil = new Discord.RichEmbed()
        .setTitle("Parancsok","\u200B")
        .addField("!ping","pingel")
        .addField("!csicskít <tag/text>","szét csicskítja az áldozatot")
        .addField("!profil","elküldi a profilod")
        .addField("!lista","elküldi a kármokodás listát")
        .addField("!status","elküldi a bot állapotát")
        .setColor("#FF0000");
        msg.channel.send(profil);
    }
}