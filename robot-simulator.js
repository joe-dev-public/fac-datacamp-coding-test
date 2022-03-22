'use strict';

class Robot {

    execute(str) {

        // Split up the input string into the relevant parts:
        const [startX, startY, startBearing, commands] = str.split(' ');

        let [x, y] = [startX, startY];

        // In/decrement an ordered "looping" array index to make changing bearing easier:
        const possibleBearings = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

        let currentBearingIdx = possibleBearings.indexOf(startBearing);

        // For each character in the commands string, take the appropriate action:
        for (const command of commands) {

            switch (command) {

                // For turning cases, coords remain unchanged.
                // We need to check the current bearing and adjust accordingly, but that's all.

                case 'R':
                    if (currentBearingIdx === 3) {
                        currentBearingIdx = 0;
                    } else {
                        currentBearingIdx++;
                    }
                    break;

                case 'L':
                    if (currentBearingIdx === 0) {
                        currentBearingIdx = 3;
                    } else {
                        currentBearingIdx--;
                    }
                    break;


                // For advancing, we need to check bearing and coords, and adjust the latter.
                // Bearing: N means x unchanged, y + 1
                //          E means x + 1, y unchanged
                //          S means x unchanged, y - 1 
                //          W means x - 1, y unchanged
                case 'A':
                    switch (currentBearingIdx) {
                        // NORTH:
                        case 0:
                            y++;
                            break;
                        // EAST:
                        case 1:
                            x++;
                            break;
                        // SOUTH:
                        case 2:
                            y--;
                            break;
                        // WEST:
                        case 3:
                            x--;
                            break;
                    }

            }

        }

        return `${x} ${y} ${possibleBearings[currentBearingIdx]}`;

    }

}

module.exports = Robot;

// https://stackoverflow.com/questions/38296667/getting-unexpected-token-export
