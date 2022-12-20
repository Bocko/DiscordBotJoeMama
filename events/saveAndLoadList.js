module.exports=
{
    saveList(fs,BadWordUserslist)
    {
        console.log(`lista mentése`);
        var out = "";
        for (let i = 0; i < BadWordUserslist.length; i++)
        {
            out += `${BadWordUserslist[i][0]},${BadWordUserslist[i][1]}`;
            if(i != BadWordUserslist.length-1)
            {
                out += "\r\n";
            }
        }
        fs.writeFileSync("filestoRead/save.txt",out);
    },

    loadList(fs,BadWordUserslist,d)
    {
        console.log(`lista beolvasása`);
        var list = fs.readFileSync("filesToRead/save.txt","utf8");
        list = list.split("\r\n");
        for (let i = 0; i < list.length; i++) 
        {
            if(list[i].length > 5)
            {                
            var nc = list[i].split(",");
            BadWordUserslist.push( [nc[0], nc[1]] );
            }
        }
    }
}