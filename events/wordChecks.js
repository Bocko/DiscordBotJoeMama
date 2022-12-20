module.exports = 
{
    badWordsCheck(fullmsg,msg,badWords)
    {
        for(var i = 0; i < badWords.length;i++)
        {
            if(fullmsg.includes(badWords[i]))
            {
                console.log(`${msg.author.tag} ezt mondta: ${badWords[i]}`);
                msg.channel.send( {files: ["./images/resend.jpeg"]} );
                return true;
            }
        }
        return false;
    },

    sorryCheck(fullmsg,msg)
    {
        if(fullmsg.includes("elnézést") || fullmsg.includes("bocs"))
        {
            msg.channel.send( {files: ["./images/semmibaj.png"]} );
        }
    },

    badwordcounter(msg,BadWordUserslist)
    {
        for(var i = 0;i < BadWordUserslist.length;i++)
        {
            if(BadWordUserslist[i][0] == msg.author.id)
            {
                BadWordUserslist[i][1]++;
                return;
            }
        }
        BadWordUserslist.push([msg.author.id,1])
    }
}