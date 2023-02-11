// Wait for the DOM to finish loading before running the game 
// Get the button elementsw and add event listeners to them


document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button'); // We have 5 buttons on HTML ,These will now be added into an Array which we can iterate through.

    for (let me of buttons) /* You can use any name you want instead of i you can put BUTTONS OR BANNANAS I CHOSE me Bcoz it helps make sense */ {
        me.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`you clicked ${gameType}`)

            }

        })
    }

})
/**
 * Docstring are used to desribe the functions , and should be used right before the function is declared.
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}