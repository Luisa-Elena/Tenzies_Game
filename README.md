# Tenzies Game

### Contents of this file
- Description
- Installation
- Usage
- Documentation

## Description
- In a tenzies game, there are 10 dice and the player must select and roll them until all dice show the same face (number). Once selected, a die cannot be rolled again.
- For each game, the time it took to finish it is recorded in seconds. The best time is stored in local storage.
- You can alse see the number of rolls in which you won the game.
- I made this project after following this React Course: https://www.youtube.com/watch?v=bMknfKXIFA8&t=30493s&ab_channel=freeCodeCamp.org
- The main part of the implementation is shown in the tutorial, but I added some extra features (the timer, images for dice)

## Installation

Here are the steps you need to follow to clone this repository: 

1. Install Git:
If you don't have Git installed, download and install it from https://git-scm.com/.

2. Navigate to the directory where you want to clone the repository. In your terminal, type: 

```sh
cd path/to/your/directory
```
or you can directly open the built-in terminal from VSCode.

3. Clone the reporitory, using: 
```sh
git clone "https://github.com/Luisa-Elena/Tenzies_Game.git"
```

4. Install the dependencies: 
```sh
cd Tenzies_Game
cd app
npm install
```

5. In order to run the project, navigate in the app directory and type:
```sh
npm start
```

## Usage
- When a die is clicked, it is freezed and after clicking the roll button again, all dice that are not freezed will show a random number as if they were rolled.
- The game ends when all dice show the same number.

## Documentation
#### App component
- This is the main component rendered
- States:
    - dice: An array containing the current state of each die with a random value and hold status.
    - tenzies: Represents whether the player has achieved Tenzies (true or false).
    - numRolls: Tracks the number of rolls performed during the game.
    - numSeconds: Represents the number of seconds elapsed since the first dice roll.
    - time: Represents the best time achieved in previous games (held in local storage).
    - firstClick: Tracks whether the first click (dice roll) has occurred.
- Functions:
    - allNewDice(): Initializes and returns an array of ten dice with random values. Each die is an object containing the randomNumber (digit from 1 to 6), isHeld (true or false to see if the die is frozen or not) and the id generated with nanoid()
    - holdDice(id): Toggles the hold status of a specific die (the die with the given id).
    - rollDice(): Rolls the dice, updating the values of the unheld dice.
    - NewGame(): Resets the game state for a new game.
- The useEffect hook updates the local storage with the best time whenever the numSeconds state changes.
#### Die component
- The Die component represents an individual die in the game. It displays the die's value, allows the player to hold/unhold the die, and triggers the holdDice function in the App component.
- Props:
    - value: Represents the current value of the die.
    - isHeld: Represents whether the die is currently held.
    - handleClick: Function triggered when the die is clicked.
- Rendering:
    - Renders the die's value and applies styling based on whether the die is held.
#### Timer component
- Props:
    - props.tenzies: Represents whether Tenzies has been achieved.
    - props.setNumSeconds: Function to update the numSeconds state in the parent component.
    - props.firstClick: Tracks whether the first click (dice roll) has occurred.
- States:
    - seconds: Represents the number of seconds elapsed.
    - timerOn: Represents whether the timer is currently running.
- useEffect for Timer Operation: Starts or stops the timer based on the value of timerOn. Increments seconds every second.
- useEffect for Handling Tenzies: Stops the timer and updates the numSeconds state in the parent component when Tenzies is achieved.
- useEffect for Starting the Timer: Starts the timer when the first dice is clicked (firstClick is set to 1).
- Rendering:
     - The Display function is responsible for rendering the time information based on the seconds state.
