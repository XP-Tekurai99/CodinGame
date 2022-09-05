// Read Input
const MESSAGE = readline(); // consists of ASCII characters

// Binary Conversion Function
function translateToBinary(char)
{
    return('0000000'.concat(char.charCodeAt(0).toString(2))).slice(-7);
}

var B = '';

// Binary Conversion Loop
for (var i = 0; i < MESSAGE.length; i++)
{
    var bin = translateToBinary(MESSAGE[i]);
    B += bin;
}

B = B.match(/(.)\1*/g);

var results = [];
for (let j = 0; j < B.length; j++)
{
    var result = '';
    if ((B[j][0]) === '0')
    {
        result = '00 ';
    }
    else
    {
        result = '0 ';
    }

    result += '0'.repeat(B[j].length);
    results.push(result);
}
results = results.join(' ');

// Answer
console.log(results);
