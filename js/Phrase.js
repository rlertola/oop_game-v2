/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// A new phrase instance is created when the start button is pushed.
let phraseArray;
const Phrase = class {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    phraseArray = this.phrase.split('');
  }

  // HTML is created to display the phrase by iterating over the letters and adding an li for each.
  addPhraseToDisplay() {
    const phraseHolder = document.getElementById('phrase');
    const ul = document.createElement('ul');
    ul.id = 'oldPhrase';

    phraseArray.forEach((letter) => {
      const li = document.createElement('li');
      if (letter === ' ') {
        li.className = 'space';
      } else {
        li.className = `hide letter ${letter}`;
      }
      li.textContent = letter;
      ul.appendChild(li);
      phraseHolder.appendChild(ul);
    })
  }

  // Checks if the letter picked is in the phrase.
  checkLetter(letter) {
    if (phraseArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // Shows all letters that match what was picked. E.g., if 'a' is picked, and there are multiples of 'a', all of them will be revealed.
  showMatchedLetter(letter) {
    const matches = document.getElementsByClassName(`hide letter ${letter}`);
    [...matches].forEach((id) => {
      id.className = 'show';
    })
  }
}


