 # The Power of Thor - Episode 1
 
 ## Synopsis
The final battle of Ragnarök, the twilight of the gods is approaching. You incarnate Thor who is participating in this final battle against all the forces of evil, led by Loki, Thor's wizard brother.

Thor was wounded during a previous battle against Fenrir, the wolf-god. During the battle, Loki took advantage of the general confusion and used his magic to annihilate the magical powers of Thor’s hammer, Mjöllnir, by separating it from his soul: the light of power.

Thor, who now feels very weak, must find and reach the light of power, as fast as possible, since it is the only thing which can restore his and Mjollnir's powers.

## Goal
The program must allow Thor to reach the light of power

## Rules
Thor moves on a map which is 40 wide by 18 high. Note that the coordinates (X and Y) start at the top left! This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".

### Starting Variables
* the variable lightX: the X position of the light of power that Thor must reach.
* the variable lightY: the Y position of the light of power that Thor must reach.
* the variable initialTX: the starting X position of Thor.
* the variable initialTY: the starting Y position of Thor.

### Directing Thor
At the end of the game turn, you must output the direction in which you want Thor to go among:
* N (North)
* NE (North-East)
* E (East)
* SE (South-East)
* S (South)
* SW (South-West)
* W (West)
* NW (North-West)

Each movement makes Thor move by 1 cell in the chosen direction.
