# Tenzies Game

### Contents of this file
- Description
- Installation
- Usage
- Documentation

## Description
- In a tenzies game, there are 10 dice and the player must select and roll them until all dice show the same face (number). Once selected, a die cannot be rolled again.
- For each game, the time it took to finish it is recorded in seconds. The best time is stored in local storage.
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
