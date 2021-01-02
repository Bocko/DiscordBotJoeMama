module.exports = 
{
    name: "profil",
    execute(msg,args,Discord)
    {
        var profil = new Discord.RichEmbed()
        .setTitle("User Informations\n──────────")
        .addField("Username:", msg.author.username)
        .addField("User Tag:", msg.author.tag)
        .addField("User ID:", msg.author.id)
        .setThumbnail(msg.author.avatarURL)
        .addBlankField()
        .setFooter("GL HF")
        .setColor("#FF0000");
        msg.channel.send(profil);
    }
}