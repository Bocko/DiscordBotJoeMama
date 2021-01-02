module.exports=
{
    saveList(fs,BadWordUserslist)
    {
        var out = "";
        for (let i = 0; i < BadWordUserslist.length; i++)
        {
            out += `${BadWordUserslist[i][0]},${BadWordUserslist[i][1]}\n`;
            if(i != BadWordUserslist.length-1)
            {
                out += "\n";
            }
        }
        fs.writeFileSync("filestoRead/save.txt",out);
    },

    loadList(fs,BadWordUserslist)
    {
        const list = fs.readFileSync("filesToRead/save.txt","utf8").split("\n");
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