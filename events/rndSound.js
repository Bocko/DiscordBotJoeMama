module.exports = async (bot,fs) =>
{
    const min = 1200000;
    const max = 3000000;
    var interval = Math.floor( Math.random() * max )+min;
    setInterval(() =>
    {
        const g = bot.guilds.get("325714661167333378");
        const listedChannels = [];

        g.channels.forEach(channel => 
        { 
            if(channel.type == "voice" && channel.members.size > 0) listedChannels.push(channel);
        });
        if (listedChannels.length > 0) 
        {
            var rnd = Math.floor( Math.random() * (listedChannels.length) );

            for (let i = 0; i < listedChannels.length; i++) 
            {
                listedChannels[i].name;
            }

            console.log(listedChannels.name);

            listedChannels[rnd].join()
            .then(connection => 
                {
                console.log('joined channel');

                connection.playStream(fs.createReadStream('images/Fart.mp3'))
                .on('end', () => {
                    console.log('left channel');
                    connection.channel.leave();
                })
                .catch(console.error);
            })
            .catch(console.error);
        }

    }, interval);
}