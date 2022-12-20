module.exports = 
{
    name: "csicskít",
    execute(msg,args,Discord,myTag,BadWordUserslist,bot)
    {
        console.log(`csicskít itt:"${msg.channel.name}"`)
        console.log(args[0]);
        if(args[0] == myTag)
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