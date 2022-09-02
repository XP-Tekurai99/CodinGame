// Input Parsing
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();

for (let i = 0; i < H; i++)
{
    const ROW = readline();
    
    var line = '';
    for (var j = 0; j < T.length; j++)
    {
        var indexASCII = T.charCodeAt(j) - 65;
        if (indexASCII < 0 || indexASCII > 26)
        {
            indexASCII = 26;
        }

        line += ROW.substring(indexASCII * L, (indexASCII + 1) * L);
    }

    // Answer
    console.log(line);
}
