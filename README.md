#OOP Treehouse FSJS Techdegree Project 4 - OOP Game App
This project was built using vanilla js. Going for "exceeds expectations."

####App.js
App.js contains the listeners for the physical keyboard and the keyboard buttons on the screen.

Either the on-screen keyboard or the physical keyboard can be clicked. If the physical keyboard is used, the corresponding button on the screen is deactivated and changes color as if you were clicking on the button on the screen.

Helper functions helpe mostly with the keyboards. If the physical keyboard is clicked, findMatchingButton finds the corresponding key button on the screen. ResetKeyboard clears the keyboard of its classes, and toggleKeyboard takes a boolean to activate/deactivate the keyboard so no keys can be pushed when game is not in play.

####Game.js
Game.js is a class that contains all the props and functions for game play. It creates a new game instance when the start button is pushed. A random phrase is picked, and added to the screen.

The handleInteraction function is the most used as it uses the other functions and checks which keyboard was clicked, which button was clicked, if it is a match, shows that letter on the board if so, removes lives if not, and checks if the game is won or lost.

Helper functions removeOldPhrase removes the phrase html from the screen after a game is won or lost, and resetHearts puts the lives back when a new game is started.

####Phrase.js
Phrase.js is a class that creates a phrase object. It is responsible for adding the phrase to the display, and checking if the letters selected are a match, and displaying them.

