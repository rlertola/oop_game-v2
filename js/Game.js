/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let phrase;
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      `If You Build It He Will Come`,
      `Bond James Bond`,
      `I Feel The Need The Need For Speed`,
      `You Had Me At Hello`,
      `Another Brick In The Wall`,
      `Bad Moon Rising`,
      `Everybody Cut Footloose`,
      `Me And Julio Down By The Schoolyard`
    ];
    this.activePhrase = null;
  }

  startGame() {
    overlay.style.visibility = 'hidden';
    this.activePhrase = this.getRandomPhrase();
    phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomIndex];
    return randomPhrase;
  }

  handleInteraction(e) {
    e.target.disabled = true;
    const letter = e.target.textContent;
    const isMatch = phrase.checkLetter(letter);
    if (isMatch) {
      phrase.showMatchedLetter(letter);
      const didWin = this.checkForWin();
      if (didWin) {
        this.gameOver();
      }
    } else {
      e.target.className = 'wrong';
      this.removeLife();
    }
  }

  removeLife() {

  }

  checkForWin() {
    const correctlength = document.getElementsByClassName('show').length;
    const phraseLength = this.activePhrase.split(' ').join('').length;
    console.log(length);
    console.log(phraseLength);
    if (correctlength === phraseLength) {
      return true;
    }
  }

  gameOver() {
    overlay.style.visibility = 'visible';
    const h2 = document.getElementById('title');
    h2.textContent = 'YOU WIN!'
  }
}
