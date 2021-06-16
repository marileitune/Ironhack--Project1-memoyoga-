class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = []
        this.pairsClicked = 0
        this.pairsGuessed = 0
        this.gameOver = false
        this.lives = 20
    }

    shuffleCards() {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this.cards;
    }

    checkIfPair(card1, card2) {
        this.pairsClicked += 1
        if (card1.getAttribute("data-card-title") === card2.getAttribute("data-card-title")) {
            this.pairsGuessed += 1
            return true
        } else {
            if (this.lives >= 2) {
                this.lives -= 1
            } else {
                this.gameOver = true
            }
            return false
        }
    }

    checkIfFinished() {
        if (this.pairsGuessed == (this.cards.length / 2)) {
            return true
        } else {
            return false
        }
    }
}
