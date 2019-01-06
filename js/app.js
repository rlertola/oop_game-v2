/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const header = document.getElementById('header');
const overlayTitle = document.getElementById('title');
const keys = document.getElementsByClassName('key');
const hearts = document.getElementsByTagName('img');

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

// Correct and incorrect keys are reset when a new game is started.
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

// Toggles enabling/disabling the keyboard. Takes a boolean; true is enable, false is disable. So user can't continue typing when the overlay screen is there, or after a game is won or lost.
const toggleKeyboard = (enable) => {
  [...keys].forEach((key) => {
    key.disabled = !enable;
  })
}

// Used when the physical keyboard is used. The corresponding button on the screen is changed.
const findMatchingButton = (letter) => {
  let match;
  [...keys].forEach((key) => {
    if (key.textContent === letter) {
      match = key;
    }
  })
  return match;
}


