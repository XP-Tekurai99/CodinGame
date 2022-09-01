// Input Parsing
var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position

// Position
let tX; // Thor's X position
let tY; // Thor's Y position
tX = initialTX; // X position assignment
tY = initialTY; // Y position assignment

// Direction
let dir; // holds the string indicating direction

// Game Loop
while (true) 
{
    const remainingTurns = parseInt(readline()); // remaining amount of turns Thor can move
    
    switch (true)
    {
        case (tX > lightX) && (tY > lightY):
            tX -= 1;
            tY -= 1;
            dir = "NW";
            break;
        case (tX > lightX) && (tY < lightY):
            tX -= 1;
            tY += 1;
            dir = "SW";
            break;
        case (tX < lightX) && (tY < lightY):
            tX += 1;
            tY += 1;
            dir = "SE";
            break;
        case (tX < lightX) && (tY > lightY):
            tX += 1;
            tY -= 1;
            dir = "NE";
            break;
        case (tX > lightX):
            tX -= 1;
            dir = "W";
            break;
        case (tX < lightX):
            tX += 1;
            dir = "E";
            break;
        case (tY > lightY):
            tY -= 1;
            dir = "N";
            break;
        case (tY < lightY):
            tY += 1;
            dir = "S";
            break;
    }

    console.log(dir); // provides the move to be made: N NE E SE S SW W or NW
}
