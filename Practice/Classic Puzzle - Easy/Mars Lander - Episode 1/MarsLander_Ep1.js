// Input Parsing
const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking the points in a sequential fashion, the surface of Mars forms.
}

// Game Loop
while (true)
{
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative
    const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative
    const fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters
    const rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90)
    const power = parseInt(inputs[6]); // the thrust power (0 to 4).

    // Action
    // two integers: rotate power (should be 0 for level 1) and thrust power (0 to 4).
    if (vSpeed < -35)
    {
        console.log('0 4');
    }
    else
    {
          console.log('0 0');
    }
}
