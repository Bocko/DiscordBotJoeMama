module.exports = 
{
    name: "lista",
    execute(msg, args, BadWordUserslist, bot)
    {
        console.log(`listáz itt:"${msg.channel.name}"`);
        const line = "--------------------------------";
        var sortedList = BadWordUserslist.sort(this.sortFunction);
        var out = `Káromkodás StatTrak:tm:\n${line}\n`;
        for (var i = 0; i < sortedList.length; i++) 
        {
            var id = sortedList[i][0];
            var name = bot.users.cache.get(id).username;
            var c = sortedList[i][1].toString();
            var cNum = 3-c.length;
            for (let i = 0; i < cNum; i++) 
            {
                c += "  ";
            }
            out += ` | ${c} db  |  ${name}\n`;
        }
        out += line;
        msg.channel.send(out);
    },

    sortFunction(a, b)
    {
        if (a[1] === b[1]) {
            return 1;
        }
        else {
            return (a[1] < b[1]) ? 1 : -1;
        }
    }
    
}