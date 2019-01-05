/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const header = document.getElementById('header');
const overlayTitle = document.getElementById('title');

// Hitting the start button hides the overlay and loads a new game with a new phrase.
let game;
startButton.addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

// When using the mouse pointer to click on keys on the screen.
keyboard.addEventListener('click', (e) => {
  if (e.target.className === 'key') {
    const key = e.target.textContent;
    game.handleInteraction(e, key);
  }
})

// When using the physical keyboard.
// Physical keys don't work if the overlay is there, and if it's a win or loss.
document.addEventListener('keyup', (e) => {
  if (overlay.style.visibility === 'hidden' && !game.checkForWin() && game.missed !== 5) {
    const key = e.key;
    game.handleInteraction(e, key);
  }
})

const resetKeyboard = () => {
  const wrongKeys = document.getElementsByClassName('wrong');
  const chosenKeys = document.getElementsByClassName('chosen');

  function changeKeys(array) {
    [...array].forEach((key) => {
      key.className = 'key';
      key.disabled = false;
    });
  }
  changeKeys(wrongKeys);
  changeKeys(chosenKeys);
}

const toggleKeyboard = (enable) => {
  const keys = document.getElementsByClassName('key');
  [...keys].forEach((key) => {
    key.disabled = !enable;
  })
}

const findMatchingButton = (letter) => {
  const keys = document.getElementsByClassName('key');
  let match;
  [...keys].forEach((key) => {
    if (key.textContent === letter) {
      match = key;
    }
  })
  return match;
}


