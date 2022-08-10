//Robot class
class Robot {
  constructor(x,y) {
    this.x = x; 
    this.y = y;
    this.score = 0;
  }


  //AI for Robot
  move(heroX,heroY,grid) {
      //Lists all possible moves
      let possibleMoves = [[this.x-1,this.y-1],[this.x-1,this.y],[this.x-1,this.y+1],[this.x,this.y-1],[this.x,this.y],[this.x,this.y+1],[this.x+1,this.y-1],[this.x+1,this.y],[this.x+1,this.y+1]];
      
      //Three weights: 10 for hero, 1-9 for treasure, 0 for clear space
      let weights = [];

      for (let i = 0; i < possibleMoves.length; i++) {

        //removes invalid moves.
        if (!possibleMove(possibleMoves[i][0],possibleMoves[i][1],grid)) {
          possibleMoves.splice(i,1);
          continue;
        }

        let destIcon = grid[possibleMoves[i][1]][possibleMoves[i][0]];

        //Weights items on their value
        //Hero is an instant return as their death ends the game.
        switch (destIcon) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            weights.push(parseInt(destIcon));
            break;
          case "h":
            weights.push(10);
            return possibleMoves[i];
        }
      }

      //finds highest weighted move and acts on it if only one move exists
      //if not, goes for move closest to user.

      //returns indices of highest weighted spaces
      let bestMoves = highestWeight(weights);
      let nextMoves = [];

      //Populates newMoves with the highest weighted moves
      for (let move of bestMoves) {
        nextMoves.push(possibleMoves[move]);
      }

      //If only one move was returned, return that move.
      if (nextMoves.length == 1) {
        return nextMoves[0];
      }

      //used to calculate the closest icon to the user
      //if two similar icons have the same length, the first entry in the nextMoves array is always chosen.
      let closestDistance = 999.9;
      let chosenCoord = [this.x,this.y];

      //If multiple moves in nextMoves, uses closest move to Hero.
      for (let coord of nextMoves) {
        let diffX = coord[0] - heroX;
        let diffY = coord[1] - heroY;
        let diffZ = pythagoras(diffX,diffY); 
        console.log(this.x, this.y, coord[0], coord[1], diffX, diffY, diffZ);

        //if statement used as a failsafe for the for loop earlier
        if (diffZ < closestDistance && coord[0] > 0 && coord[1] > 0 && grid[coord[1]][coord[0]] != "o") {
            chosenCoord = coord;
            closestDistance = diffZ;
        }
      }

      console.log(chosenCoord);
      return chosenCoord;
  }
}