//Hero class
class Hero {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.score = 0;
        this.alive = true;
    }

    //changes x and y property of hero.
    move(newX,newY) {
        this.x = newX;
        this.y = newY;
    }
}