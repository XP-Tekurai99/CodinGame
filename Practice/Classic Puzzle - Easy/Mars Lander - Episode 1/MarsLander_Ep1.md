# Mars Lander - Episode 1
 
## Story
You have been promoted to commander of the Mars Lander mission ! The goal of the operation is to land an exploration rover on martian ground. Your superiors at NASA expect very much of you for this mission, and you'll have to prove that you have what it takes to become a great intersideral commander. You will have to land the space ship on mars, making sure that the landing is done smoothly.

## Goal
The goal is to safely land the "Mars Lander" shuttle, the landing ship which contains the Opportunity rover. Mars Lander is guided by a program, and right now the failure rate for landing on the NASA simulator is unacceptable.

## Rules
Built as a game, the simulator puts Mars Lander on a limited zone of Mars sky.

Every second, depending on the current flight parameters (location, speed, fuel ...), the program must provide the new desired tilt angle and thrust power of Mars Lander.

The game simulates a free fall without atmosphere. Gravity on Mars is 3.711 m/s² . For a thrust power of X, a push force equivalent to X m/s² is generated and X liters of fuel are consumed. As such, a thrust power of 4 in an almost vertical position is needed to compensate for the gravity on Mars.

For a landing to be successful, the ship must:
* land on flat ground
* land in a vertical position (tilt angle = 0°)
* vertical speed must be limited ( ≤ 40m/s in absolute value)
* horizontal speed must be limited ( ≤ 20m/s in absolute value)
