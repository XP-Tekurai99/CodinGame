/**
 * while loop represents the game
 * each iteration represents a turn of the game
 * inputs are the heights of the mountains
 * output is the index of the mountain to fire shoot
 * inputs are automatically updated according to previous actions
 **/

// Game Loop
while (true) 
{
    let mountainLargest = 0;
    let mountainToShoot = 0;

    for (let i = 0; i < 8; i++) 
    {
        const mountainH = parseInt(readline()); // height of a mountain

        if (mountainLargest < mountainH)
        {
            mountainLargest = mountainH;
            mountainToShoot = i;
        }
    }

    // Action
    console.log(mountainToShoot); // the index of the mountain to shoot
}
