// Input Parsing
var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building
const H = parseInt(inputs[1]); // height of the building
const N = parseInt(readline()); // maximum number of turns before game over
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

// Game Loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Action
    console.log('0 0'); // the location of the next window to which Batman should jump
}
