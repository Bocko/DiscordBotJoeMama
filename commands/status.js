module.exports = 
{
    name: "status",
    execute(msg,args,Discord,myTag,BadWordUserslist,bot,fing,filter)
    {
        console.log(`status itt:"${msg.channel.name}"`);
        var status = new Discord.RichEmbed()
        .setTitle("Joe Mama Status","\u200B")
        .addField("Filter Status",filter?"ON":"OFF")
        .addField("Fing Status",fing?"ON":"OFF")
        msg.channel.send(status);
    }
}