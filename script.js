// get Canvas element from HTML file
let canvas = document.querySelector('canvas')

//get access to the canvas tags 2D drawing functions
let ctx = canvas.getContext('2d');

// get elements from HTML file
let startBtn = document.querySelector('#start')
let tryAgainBtn = document.querySelector('#try-again')
let memoryBoard = document.querySelector('#memory-board')
let soundOn = document.querySelector('.sound-on')

//audios
let gameAudio = new Audio('https://sanctus.sfo2.digitaloceanspaces.com/AUDIO.mp3')
let screenAudio = new Audio('https://sanctus.sfo2.digitaloceanspaces.com/yoga.mp3')
gameAudio.volume = 0.1
screenAudio.volume = 0.1
gameAudio.loop = true
screenAudio.loop = true

//images
let bigImage = new Image();
bigImage.src = './css/images/big-image.png';

let advancedCard = new Image();
advancedCard.src = './css/images/advanced-card.png'

//load images faced up
let img1 = new Image();
img1.src = './css/images/1-img.png'

let img2 = new Image();
img2.src = './css/images/1-txt.png'

let img3 = new Image();
img3.src = './css/images/2-img.png'

let img4 = new Image();
img4.src = './css/images/2-txt.png'

let img5 = new Image();
img5.src = './css/images/3-img.png'

let img6 = new Image();
img6.src = './css/images/3-txt.png'

let img7 = new Image();
img7.src = './css/images/4-img.png'

let img8 = new Image();
img8.src = './css/images/4-txt.png'

let img9 = new Image();
img9.src = './css/images/5-img.png'

let img10 = new Image();
img10.src = './css/images/5-txt.png'

let img11 = new Image();
img11.src = './css/images/6-img.png'

let img12 = new Image();
img12.src = './css/images/6-txt.png'

let img13 = new Image();
img13.src = './css/images/7-img.png'

let img14 = new Image();
img14.src = './css/images/7-txt.png'

let img15 = new Image();
img15.src = './css/images/8-img.png'

let img16 = new Image();
img16.src = './css/images/8-txt.png'

let img17 = new Image();
img17.src = './css/images/9-img.png'

let img18 = new Image();
img18.src = './css/images/9-txt.png'

let img19 = new Image();
img19.src = './css/images/10-img.png'

let img20 = new Image();
img20.src = './css/images/10-txt.png'

let img21 = new Image();
img21.src = './css/images/11-img.png'

let img22 = new Image();
img22.src = './css/images/11-txt.png'

let img23 = new Image();
img23.src = './css/images/12-img.png'

let img24 = new Image();
img24.src = './css/images/12-txt.png'

let img25 = new Image();
img25.src = './css/images/13-img.png'

let img26 = new Image();
img26.src = './css/images/13-txt.png'

let img27 = new Image();
img27.src = './css/images/14-img.png'

let img28 = new Image();
img28.src = './css/images/14-txt.png'

let img29 = new Image();
img29.src = './css/images/15-img.png'

let img30 = new Image();
img30.src = './css/images/15-txt.png'

//class constructor (all the cards facedUp will be built from this class)
class Card {
    constructor(img, title) {// each card will have their own img and title
        this.img = img
        this.title = title
        this.bg = advancedCard
    }
}

let card1 = new Card(img1, "cobra")
let card2 = new Card(img2, "cobra")
let card3 = new Card(img3, "low-lunge")
let card4 = new Card(img4, "low-lunge")
let card5 = new Card(img5, "warrior")
let card6 = new Card(img6, "warrior")
let card7 = new Card(img7, "one-legged-downward-facing-dog")
let card8 = new Card(img8, "one-legged-downward-facing-dog")
let card9 = new Card(img9, "downward-facing-dog")
let card10 = new Card(img10, "downward-facing-dog")
let card11 = new Card(img11, "dancer")
let card12 = new Card(img12, "dancer")
let card13 = new Card(img13, "triangle")
let card14 = new Card(img14, "triangle")
let card15 = new Card(img15, "easy-pose")
let card16 = new Card(img16, "easy-pose")
let card17 = new Card(img17, "boat")
let card18 = new Card(img18, "boat")
let card19 = new Card(img19, "one-legged-boat-pose")
let card20 = new Card(img20, "one-legged-boat-pose")
let card21 = new Card(img21, "camel")
let card22 = new Card(img22, "camel")
let card23 = new Card(img23, "supported-headstand")
let card24 = new Card(img24, "supported-headstand")
let card25 = new Card(img25, "one-legged-king-pigeon")
let card26 = new Card(img26, "one-legged-king-pigeon")
let card27 = new Card(img27, "supported-headstand-variation")
let card28 = new Card(img28, "supported-headstand-variation")
let card29 = new Card(img29, "big-toe-bow-pose")
let card30 = new Card(img30, "big-toe-bow-pose")

// array with all the cards
let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]

let memoryGame = new MemoryGame(cards);

// logo (will serve for all the screens)
function logo() {
    ctx.beginPath()
    ctx.font = "90px Indie Flower";
    ctx.fillStyle = "#A6408B";
    ctx.fillText("MEMOYOGA", 471, 90);
    ctx.closePath()
}

//splash screen
function splashScreen() {
    tryAgainBtn.style.display = 'none'
    canvas.style.display = "block"
    splashSong()
    logo()
    ctx.drawImage(bigImage, 482, 120)
    ctx.beginPath()
    ctx.font = "30px Montserrat Semi-bold";
    ctx.fillStyle = "#DE3E9F";
    ctx.fillText("Learn the names of yoga poses", 442, 585);
    ctx.closePath()
}

//start screen
livesDOM = `${memoryGame.lives}`

function startSettings() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameSong()
    startBtn.style.display = 'none'
    tryAgainBtn.style.display = 'none'
    memoryGame.startSettings();
    memoryGame.shuffleCards();
}

//game screen
let cannotClick = false
function click() {
    let htmlElement = '';
    memoryGame.cards.forEach((elem) => {
        htmlElement += `
      <div class="card" data-card-title="${elem.title} source="">
        <img class="back" src="${elem.bg.currentSrc}">
        <img class="front" src="${elem.img.currentSrc}">
      </div>
    `;
    });
    document.querySelector('#memory-board').innerHTML += htmlElement;
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            if (cannotClick === false) {
                card.querySelector(".back").setAttribute("hidden", "true")
                let cardClicked = card
                if (!(memoryGame.pickedCards.includes(cardClicked))) {
                    memoryGame.pickedCards.push(cardClicked)
                    if (memoryGame.pickedCards.length == 2) {
                        cannotClick = true
                        setTimeout(function () {
                            let isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
                            if (isPair === false) {
                                memoryGame.pickedCards[0].querySelector(".back").removeAttribute("hidden")
                                memoryGame.pickedCards[1].querySelector(".back").removeAttribute("hidden")
                                updateScore()
                            }
                            memoryGame.pickedCards = []

                            if (memoryGame.checkIfFinished() === true) {
                                win()
                            }
                            console.log(memoryGame.lives)
                            console.log(memoryGame.gameOver)
                            if (memoryGame.gameOver === true) {
                                gameOver()
                            }
                            cannotClick = false
                        }, 2500)
                    }
                }
            }
        });
    });
}


function updateScore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    logo()
    ctx.beginPath()
    ctx.fillStyle = "#A6408B"
    ctx.font = "40px Indie Flower"
    ctx.fillText(`Lives: ${memoryGame.lives}`, 100, 90)
    ctx.closePath()
}

function gameScreen() {
    updateScore()
    logo()
    gameSong()
}

function splashSong() {
    if (soundOn.getAttribute('src') === './css/images/sound-on.png') {
        screenAudio.play()
        gameAudio.pause()
    } else {
        screenAudio.pause()
        gameAudio.pause()
    }
}

function gameSong() {
    if (soundOn.getAttribute('src') === './css/images/sound-on.png') {
        screenAudio.pause()
        gameAudio.play()
    } else {
        screenAudio.pause()
        gameAudio.pause()
    }
}

function pauseSong() {
    screenAudio.pause()
    gameAudio.pause()
}

//gameOver screen
function gameOver() {
    splashSong()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.querySelector('#memory-board').innerHTML = ''
    tryAgainBtn.style.display = 'block'
    startBtn.style.display = 'none'
    ctx.drawImage(bigImage, 482, 120)
    logo()
    ctx.beginPath()
    ctx.font = "30px Montserrat Semi-bold";
    ctx.fillStyle = "#DE3E9F";
    ctx.fillText(`Pairs guessed: ${memoryGame.pairsGuessed}. You need more practice. But keep calm and`, 232, 585);
    ctx.closePath()
}


//win screen
function win() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.querySelector('#memory-board').innerHTML = ''
    tryAgainBtn.style.display = 'block'
    tryAgainBtn.innerHTML = "RESTART"
    startBtn.style.display = 'none'
    canvas.style.display = "block"
    splashSong()
    ctx.drawImage(bigImage, 482, 120)
    logo()
    ctx.beginPath()
    ctx.font = "30px Montserrat Semi-bold";
    ctx.fillStyle = "#DE3E9F";
    ctx.fillText("You won. Now go to practice yoga. Namastê!", 357, 550);
    ctx.closePath()

}

window.addEventListener('load', (event) => {
    splashScreen()
    startBtn.addEventListener('click', () => {
        startSettings()
        click()
        gameScreen()
    })
    tryAgainBtn.addEventListener('click', () => {
        startSettings()
        click()
        gameScreen()
    })
    soundOn.addEventListener('click', () => {
        if (soundOn.getAttribute('src') === './css/images/sound-on.png') {
            soundOn.setAttribute('src', './css/images/sound-off.png')
            pauseSong()
        } else if (soundOn.getAttribute('src') === './css/images/sound-off.png') {
            soundOn.setAttribute('src', './css/images/sound-on.png')
            if (startBtn.style.display === 'none' && tryAgainBtn.style.display === 'none') {
                gameSong()
            } else {
                splashSong()
            }
        }
    })

});

