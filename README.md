# Memoyoga

## Instructions
This is a memory card game for 1 player.

### Aim of the game
The aim of the game is to match the illustrations of yoga asanas with their names. 
The player has 25 lives, which means that only 25 mistakes can be made. 

### How to play
All cards start faced down. When the player clicks the mouse on a card, it will turn over and show the name or the illustration of a yoga position.
The player then needs to click on another card to turn over. If the player finds the correct pair, the cards are going to keep faced up, with the illustration and name appearing.
When a player turns over two cards that do not match, those cards are turned face down again (in the same position) after 3 seconds and the player loses 1 life (will decrease the counter by 1).
So the trick is to remember which cards are where and match all pairs without making more than 10 mistakes in a maximum of 30 minutes.
If the player makes more than 25 mistakes, the game is over and will appear a screen to try again. 
If the player completes the game, the game is over and will appear a screen to try again. 

## Settings
The game has an audio by default. The player can turn the audio off or on again by clicking the button in the top right corner of the screen (when the music is on the button that will appear has a volum icon and when the music is off the button that will appear has a mute icon).

## Project

### Technologies that will be used
- HTML5
- CSS3
- JavaScript
- JQuery

### Flow
- 1st: splash frame
- 2nd: level options frame
- 3rd: game frame (regarding the level option that was chosen)
- 4th: last frame (game over frame or win frame)

My plan is build the first (splash), the second (level choice) and the fourth screens with canvas and the third (game) with CSS.

### Data structure

#### index.html
- canvas (1365 x 780)
- script (link js file)
- build the first, second and fourth screens

#### style.css
- style the third screen

#### script.js (canvas)
- size: 1920×1080
- images 
- audio
- build the third screen

### Fonts that will be used
- Indie Flower Regular
- Monteserrat Regular

### Images that will be used

#### Icons
- mute icon
- volum icon
- purple flower (beginner level option)
- pink flower (advanced level option)

#### Images
- 15 cards with illustrations of the poses
- 15 cards with names of the poses
- 20 cards with the purple flower (cards faced down - beginner level)
- 30 cards with the pink flower (cards faced down - advanced level)

### Audio that will be added

https://drive.google.com/file/d/1mKkJ26KFLzHDzAa_iFD-SUznCUfztgk8/view?usp=sharing

### Buttons 
- START
- TRY AGAIN

### Colors palette
- #FFE5FE
- #FCDBFA
- #DE3E9F
- #A6408B

### Texts

#### 1st frame (splash)
- MEMOYOGA (Indie Flower Regular)
- Learn the names of yoga poses (Montserrat Regular)

#### 2nd frame
- Lives: 25 

#### 3rd frame (game over)
- You need more practice. But keep calm and

#### 3rd frame (win)
- You win! How about trying to do it in less time?

### Backlog

- Ranking (in order of who completes in less time and with less mistakes)
- 2-player option (play with a friend)
- Chronometer
- Two levels: beginner: the player needs to match 10 pairs of yoga poses for beginners; advanced: the player needs to match 15 pairs of yoga poses, including advanced asanas.


### Tasks

https://trello.com/b/AFUAaoRb
