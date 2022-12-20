module.exports = 
{
    name: "ping",
    execute(msg,args,Discord,myTag,BadWordUserslist,bot)
    {
        console.log(`pingelt itt:"${msg.channel.name}"`);
        msg.channel.send("pong...bitch");
    }
}