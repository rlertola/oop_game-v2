/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let phraseArray;
const Phrase = class {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    phraseArray = this.phrase.split('');
  }

  addPhraseToDisplay() {
    const phraseHolder = document.getElementById('phrase');
    const ul = document.createElement('ul');

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

  checkLetter(letter) {
    if (phraseArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    const matches = document.getElementsByClassName(`hide letter ${letter}`);
    [...matches].forEach((id) => {
      id.className = 'show';
    })
  }
}


