//Makes sure numbers aren't below/above size of board.
function limit(num) {
    if (num < 0) {
        return num+1;
    } else if (num > 9) {
        return num-1;
    } else {
        return num;
    }   
}

//Handles keyboard input for the Play stage.
function inputHandler(input) {
    switch (input) {
        case 38:
        case 87:
            return [-1,0];
        case 37:
        case 65:
            return [0,-1];
        case 40:
        case 83:
            return [1,0];
        case 39:
        case 68:
            return [0,1];
        default:
            return [0,0];
    }
}

//Checks to see if there's an obstacle where the move destination is.
function possibleMove(x,y,grid) {
    //Makes sure that X & Y haven't exceed their ranges
    if (x < 0 || x > 9 || y < 0 || y > 9) {
        return false;
    }

    //Checks to see if the destination contains an obstacle (only movement-impairing icon)
    return !(grid[y][x] == 'o' || grid[y][x] == 'k');
}

//Calculates the shortest distance between two points.
function pythagoras(x,y) {
    let z = Math.pow(x,2) + Math.pow(y,2);
    return Math.sqrt(z);
}

//returns indexes of the highest weighted positions
function highestWeight(weights) {
    let topWeight = 0;
    let higher = true;
    let indices = [];
      
    while (higher) {
      higher = false;
      for (let f = 0; f < weights.length; f++) {
        if (weights[f] < topWeight) {
          indices.splice(0,indices.length);
          higher = true;
          continue;
        }

        topWeight = weights[f];
        indices.push(f);
      }
    }

    return indices;
}

//Displays an icon in the board if it isn't 0
function display(text) {
    if (text == '0') {
        return "";
    }
    return text;
}