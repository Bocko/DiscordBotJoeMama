const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require('ytdl-core');
const mcounter = require("./events/mcounter");
const fing = require("./events/rndSound");
const wc = require("./events/wordChecks");
const cs = require("./events/cmdSetup");
const sal = require("./events/saveAndLoadList");

const bot = new Discord.Client();
const myTag = "<@!590906832764010499>";
const loginToken = fs.readFileSync("filesToRead/logintoken.txt","utf8");
const badWords = fs.readFileSync("filesToRead/list.txt","utf8").toLowerCase().split("\r\n");
const prefix = "!";

var filter = true;
var BadWordUserslist = [];

cs.cmdSetuper(bot,Discord,fs);

bot.once("ready", () =>
{
    console.log(`bot ready - ${Date.now()}`);
    sal.loadList(fs,BadWordUserslist);
    bot.user.setActivity(`Tagok Száma: ${bot.guilds.get("325714661167333378").memberCount}`, {type: "PLAYING" }).catch(console.error);
    fing(bot,fs);
    mcounter(bot);
});

bot.on("message", msg=>
{
    if(msg.author.bot)return;

    var args = msg.content.slice(prefix.length).split(" ");
    var cmd = args.shift().toLowerCase();

    if (cmd == "filter"){filter = !filter;return;}
    
    if(filter)
    {
        var fullmsg = msg.content.replace(/\s/g, '').toLowerCase();
        if(wc.badWordsCheck(fullmsg,msg,badWords))
        {
            wc.badwordcounter(msg,BadWordUserslist);
            sal.saveList(fs,BadWordUserslist);
        }
        wc.sorryCheck(fullmsg,msg);
    }

    if(!msg.content.startsWith(prefix)) return;

    try 
    {
        bot.commands.get(cmd).execute(msg,args,Discord,myTag,BadWordUserslist,bot);
    }
    catch (error) 
    {
        console.log("vmelyik fasz nem tud irni...")
        console.log(error);    
    }
});

bot.on('messageUpdate', (oldMessage, newMessage) => 
{
    if(newMessage.content != oldMessage.content)
    {
        var out = `${oldMessage.author.tag} editelte “${oldMessage.content}”-t “${newMessage.content}”-re, csicska`;
        newMessage.channel.send(out);
    }
});

bot.login(loginToken);