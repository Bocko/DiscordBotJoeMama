module.exports = 
{
    name: "csicskít",
    execute(msg, args, BadWordUserslist, bot)
    {
        console.log(`csicskít itt:"${msg.channel.name}"`)
        if(args[0] == `<@${bot.user.id}>`)
        {
            msg.reply("azt hiszed, hogy majd becsicskítom magam? pff..");
        }
        else if(args[0] != null)
        {
            var tomb = ["egy fasz xd lol ezt megkaptad", "egy..egy..FASZFEJ LMAO", "egy casual csicska", "wow pont Bocko stream-ét nézi ttv/BockoOfficial-on"];
            msg.channel.send(args[0] + ", " + tomb[Math.floor(Math.random()*4)]);
        }  
        else
        {
            msg.reply("nem adtad meg hogy kit");
        }
    }
}