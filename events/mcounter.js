module.exports = async (bot) =>
{
    const g = bot.guilds.get("325714661167333378");
    setInterval(() =>
    {
        var mcount = g.memberCount;
        bot.user.setActivity(`tagok száma: ${mcount}`, {type: "PLAYING" }).catch(console.error);
    }, 3600000);
}