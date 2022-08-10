# COMP284-Assignment-2
This is the first assignment I did in JavaScript during my time at University of Liverpool.

This is a game where the player attempts to collect treasure whilst being pursued by 1+ AI robots, which attempt to kill the player.
Robots can also pick up treasure to prevent the player from collecting it.

On loadup, a setup stage is encountered, which allows for the placement of characters.
- Numbers 1-9 represent treasure
- The letter "h" represents the hero (the player's character)
- The letter "k" represents a killer robot, which will move towards the player and attempt to kill them.

As soon as a Hero, 1+ Robots and some treasure is placed, the player will be able to control their player using the arrow keys.

The game is over when either the robot catches ("kills") the player, or all treasure is collected.
If all treasure is collected, the team with more treasure will win.
