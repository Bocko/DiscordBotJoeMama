const Discord = require("discord.js");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const fing = require("./events/rndSound");
const wc = require("./events/wordChecks");
const cs = require("./events/cmdSetup");
const sal = require("./events/saveAndLoadList");
const fingStatus = require("./events/fingSet");

const bot = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
    ]});
const loginToken = fs.readFileSync("filesToRead/logintoken.txt","utf8");
const badWords = fs.readFileSync("filesToRead/list.txt","utf8").toLowerCase().split("\r\n");
const prefix = "!";

var filter = true;
var BadWordUserslist = [];
var d = new Date();

cs.cmdSetuper(bot);

bot.once(Events.ClientReady, c =>
{
    console.log(`Ready! Logged in as ${c.user.tag} - ${d.getFullYear()}.${(d.getMonth()+1)}.${d.getDate()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`);
    sal.loadList(fs,BadWordUserslist);
    bot.user.setPresence({ activities: [{ name: 'Your Mother | !parancsok'}], status: 'online' });
    fing(bot,fs,fingStatus);
    console.log("ready");
});

bot.on(Events.MessageCreate, msg =>
{
    if(msg.author.bot) return;

    var args = msg.content.slice(prefix.length).split(" ");
    var cmd = args.shift().toLowerCase();

    if (filterCheck(cmd)) return;
    if (fingCheck(cmd)) return;
    
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
        bot.commands.get(cmd).execute(msg, args, BadWordUserslist, bot, fingStatus.getFing(), filter);
    }
    catch (error) 
    {
        console.log("vmelyik fasz nem tud irni...")
        console.log(error);    
    }
});

bot.on(Events.MessageUpdate, (oldMessage, newMessage) =>
{
    if(newMessage.author.bot)return;
    if(newMessage.content != oldMessage.content)
    {
        var out = `${oldMessage.author.tag} editelt: “${oldMessage.content}”  -->  “${newMessage.content}”, csicska`;
        newMessage.channel.send(out);
        newMessage.react(bot.emojis.cache.get("652191105923940352"));
    }
});

bot.login(loginToken);

function filterCheck(cmd)
{
    if (cmd == "filter")
    {
        filter = !filter; 
        bot.guilds.get("325714661167333378").channels.get("364084198404784129").send(filter ? "filter on": "filter off");
        console.log(filter ? "filter on": "filter off");
        return true;
    }
    return false;
}

function fingCheck(cmd)
{
    if (cmd == "fing")
    {
        fingStatus.fingSwitch();
        var fstatus = fingStatus.getFing();
        bot.guilds.get("325714661167333378").channels.get("364084198404784129").send(fstatus ? "fing on": "fing off");
        console.log(fstatus ? "fing on": "fing off");
        return true;
    }
    return false;
}