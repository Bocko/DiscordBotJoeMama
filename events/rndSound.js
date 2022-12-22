const { ChannelType } = require("discord.js");

module.exports = async (bot,fs,fing) =>
{
    const min = 3600000;
    //const min = 5000;
    const max = 5400000;
    //const max = 15000;
    var interval = Math.floor( Math.random() * (max-min) )+min;
    console.log(timeOfFing(interval));

    var fingLoop = function()
    {
        interval = Math.floor( Math.random() * (max-min) )+min;
        console.log(timeOfFing(interval));
        
        if (fing.getFing()) 
        {
            const guild = bot.guilds.cache.get("325714661167333378");
            const listedChannels = [];

            guild.channels.cache.forEach(channel =>
            {
                //https://discord.com/developers/docs/resources/channel#channel-object-channel-types
                if(channel.type == ChannelType.GuildVoice && channel.members.size > 0) listedChannels.push(channel);
            });

            if (listedChannels.length > 0)
            {
                var rnd = Math.floor( Math.random() * (listedChannels.length) );

                listedChannels[rnd].join()
                .then(connection =>
                {
                    console.log(`joined channel - ${listedChannels[rnd].name}`);
                    try 
                    {
                        connection.playStream(fs.createReadStream('images/Fart.mp3'))
                        .on('end', () => 
                        {
                            console.log('left channel');
                            connection.channel.leave();                    
                        });
                    }
                    catch (error)
                    {
                        console.log(error)
                    }
                    
                }).catch(console.error);
            }
            else
            {
                console.log("minden szoba üres volt");
            }
        }
        setTimeout(fingLoop, interval);
    }

    setTimeout(fingLoop,interval);

    function timeOfFing(interval)
    {
        var d = new Date()
        return `Estimated time of fing: "${Math.floor( d.getHours() + (( d.getMinutes() + (interval/60000) ) / 60) )}:${(Math.floor( d.getMinutes()+(interval/60000))%60 )}" - interval ${Math.floor(interval/60000)} min`;
    }
}
