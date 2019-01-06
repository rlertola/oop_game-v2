/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// New instance of the game class is created when the start button is pushed.
let phrase;
const Game = class {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      `Days Of Thunder`,
      `Bond James Bond`,
      `Viva Las Vegas`,
      `You Had Me At Hello`,
      `Bad Moon Rising`,
      `Murder She Wrote`
    ];
    this.activePhrase = null;
  }

  // Run when the start button is pushed.
  // Hides the overlay, creates a new phrase, displays it, activates the keyboard, and resets the player's lives.
  startGame() {
    overlay.style.visibility = 'hidden';
    this.activePhrase = this.getRandomPhrase();
    phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
    toggleKeyboard(true);
    this.resetHearts();
    header.textContent = `PHRASE HUNTER`;
  }

  // Gets a random phrase and is assigned to activePhrase.
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomIndex];
    return randomPhrase;
  }

  // Called when on screen key is clicked, or from the physical keyboard.
  handleInteraction(e, key) {
    let targetButton;
    let letter;
    if (e.type === 'click') {
      letter = e.target.textContent;
      targetButton = e.target;
    }
    if (e.type === 'keyup') {
      letter = key;
      targetButton = findMatchingButton(key);
    }

    // Prevents errors when pushing keys that have already been pushed or non-letter keys.
    // Checks if the key pushed is found in the phrase. If it is, it is revealed on the board and checkForWin is called. If not, a life is taken away.
    if (targetButton !== undefined) {
      targetButton.disabled = true;
      const isMatch = phrase.checkLetter(letter);
      if (isMatch) {
        phrase.showMatchedLetter(letter);
        targetButton.className = 'chosen';
        const didWin = this.checkForWin();
        if (didWin) {
          this.gameOver(true);
        }
      } else {
        targetButton.className = 'wrong';
        this.removeLife(this.missed);
      }
    }
  }

  // Changes the heart image if an incorrect letter is guessed. Uses the number missed as the index of the hearts. Calls gameOver if 5 misses;
  removeLife(miss) {
    hearts[miss].src = 'images/lostHeart.png';
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  // Determines if player won by comparing the length of the correct keys(by checking the 'show' class), and the length of the actual phrase.
  checkForWin() {
    const correctLength = document.getElementsByClassName('show').length;
    const phraseLength = this.activePhrase.split(' ').join('').length;

    if (correctLength === phraseLength) {
      return true;
    }
  }

  // Takes a boolean, true is a win, false is a loss. Deactivates the keys, and a timer is started to change back to the overlay screen where the keyboard is reset and the old phrase is removed before a new game is started.
  gameOver(won) {
    if (won === true) {
      header.textContent = `YOU GOT IT!`;
      overlayTitle.textContent = `WANNA GO AGAIN?`;
    } else {
      header.textContent = `BUMMER, YOU LOST!`;
      overlayTitle.textContent = `GIVE IT ANOTHER SHOT?`;
    }
    toggleKeyboard(false);
    setTimeout(() => {
      overlay.style.visibility = 'visible';
      resetKeyboard();
      this.removeOldPhrase();
    }, 2500);
  }

  // Helper functions

  // Removes phrase when the overlay screen appears.
  removeOldPhrase() {
    const oldPhrase = document.getElementById('oldPhrase');
    oldPhrase.parentNode.removeChild(oldPhrase);
  }

  // Resets the lives when the game is started.
  resetHearts() {
    [...hearts].forEach((heart) => {
      heart.src = 'images/liveHeart.png'
    })
  }
}


