function Hangman(word) {
    this.finalWord = word;
    this.finalWordArray = word.split('');
    this.errorsLeft = 6;
    this.wrongSymbols = [];
    this.fillArray = this.finalWordArray.map(() => "_");

    this.guess = (letter) => {
        this.finalWordArray.map((el, index) => {
            if (el === letter) {
                this.fillArray[index] = letter;
            }
        })

        if (!this.fillArray.includes(letter)) {
            this.errorsLeft--;
            this.wrongSymbols.push(letter);

            if (this.errorsLeft > 0) {
                console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols.join(',')}`);
            } else {
                console.log(`You have lost, there are no more attempts. The word is ${this.finalWord}`);
            }
        }

        if (!this.fillArray.includes('_')) {
            console.log(`${this.finalWord} | You won!`);
        }

        console.log(this.fillArray.join(''));

        return this;
    };

    this.getGuessedString = () => {
        return this.fillArray.join('');
    };

    this.getErrorsLeft = () => {
        return this.errorsLeft;
    };

    this.getWrongSymbols = () => {
        return this.wrongSymbols;
    };

    this.getStatus = () => {
        return `${this.fillArray.join('')} | errors left ${this.errorsLeft}`;
    };

    this.startAgain = (newWord) => {
        this.finalWord = newWord;
        this.finalWordArray = newWord.split('');
        this.errorsLeft = 6;
        this.wrongSymbols = [];
        this.fillArray = this.finalWordArray.map(() => "_");

        return this;
    };
};

const hangman = new Hangman('webpurple');

module.exports = hangman;
