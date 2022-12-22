const { EmbedBuilder } = require('discord.js');

module.exports = 
{
    name: "parancsok",
    execute(msg, args, BadWordUserslist, bot)
    {
        console.log(`parancsok itt:"${msg.channel.name}"`);
        var cmds = new EmbedBuilder()
        .setTitle("Parancsok","\u200B")
        .addFields(
            { name: "!ping", value: "pingel" },
            { name: "!csicskít <tag/text>", value: "szét csicskítja az áldozatot" },
            { name: "!profil", value: "elküldi a profilod" },
            { name: "!lista", value: "elküldi a kármokodás listát" },
            { name: "!status", value: "elküldi a bot állapotát" })
        .setColor("#FF0000");

        msg.channel.send({embeds: [cmds]});
    }
}