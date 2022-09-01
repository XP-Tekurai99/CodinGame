// Input Parsing
const n = parseInt(readline()); // number of temperatures to analyse
var inputs = readline().split(' ');
var bestTemp;
bestTemp = parseInt(inputs[0]);

for (let i = 0; i < n; i++)
{
    const t = parseInt(inputs[i]); // temperature expressed as an integer ranging from -273 to 5526
    
    if (Math.abs(t) < Math.abs(bestTemp))
    {
        bestTemp = t;
    }
    else if (Math.abs(t) == Math.abs(bestTemp) && t > 0)
    {
        bestTemp = t;
    }
}

if (n == 0)
{
    bestTemp = 0;
}

// Answer
console.log(bestTemp);
