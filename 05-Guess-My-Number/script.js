'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof (guess));


    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    }

    // When player win
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
        }

        document.querySelector('.highscore').textContent = highScore;


    }

    // When number is high
    else if (guess > secretNumber) {
        if (score > 1) {
            // console.log(score);
            document.querySelector('.message').textContent = '📈 To high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
        }

    }

    // When number is low
    else if (guess < secretNumber) {
        if (guess > 1) {
            // console.log(score);
            document.querySelector('.message').textContent = '📉 To low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
        }

    }


})


// Play again
document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
})