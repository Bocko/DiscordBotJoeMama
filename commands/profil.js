const { EmbedBuilder } = require('discord.js');

module.exports = 
{
    name: "profil",
    execute(msg, args, BadWordUserslist, bot)
    {
        console.log(`profil itt:"${msg.channel.name}"`);
        var profil = new EmbedBuilder()
        .setTitle("User Informations\n──────────")
        .addFields(
            { name: "Username:", value: msg.author.username},
            { name: "User Tag:", value: msg.author.tag},
            { name: "User ID:", value: msg.author.id})
        .addFields({ name: '\u200B', value: '\u200B' })
        .setFooter({text:"GL HF"})
        .setColor("#FF0000");

        msg.channel.send({embeds: [profil]});
    }
}