// Wait for the DOM to finish loading before running the game 
// Get the button elementsw and add event listeners to them


document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button'); // We have 5 buttons on HTML ,These will now be added into an Array which we can iterate through.

    for (let me of buttons) /* You can use any name you want instead of i you can put BUTTONS OR BANNANAS I CHOSE me Bcoz it helps make sense */ {
        me.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }

        })

    }
    
    runGame('addition');
})




/**
 * Docstring are used to desribe the functions , and should be used right before the function is declared.
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! you got it right :)');
        incrementScore();
    } else {
        alert(`You got the wrong answer, You said ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();

    }

    runGame(calculatedAnswer[1]);


}

/**
 * Gets the operands (the numbers) and the operator (plus,minus etc)
 * firectly from the dom, and returns the correct answer
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); // We are using parseInt function to make sure we treat the number as Integer( Whole number no decimal), javascript always returns a value as a string,  But we need a number , Hence why we use parseInt.
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1 
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore; // we could have as well said oldScore + 1, However this is a newer way of writing JS, The reason why we 
    // Are writing ++ before oldScore , is because if we put oldScore++ , JS would display the value of oldScore in HTML and would than update + 1, But HTML doesnt work
    //This way , And even tho the score would be updated and correct in console , In HTML it would not , Putting ++oldScore , Ensures all calculations are done prior to displaying


}


/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1 
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore; 

    if (oldScore == 5) {
        alert(`You faggghet you lose!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
        document.body.style.background = "red";
    }
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}