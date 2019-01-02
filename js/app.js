/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

let game;
startButton.addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

keyboard.addEventListener('click', (e) => {
  if (e.target.className === 'key') {
    game.handleInteraction(e);
  }
})



