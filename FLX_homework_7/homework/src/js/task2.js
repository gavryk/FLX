let play = confirm('Do you want to play a game?'),
    rangeCount = 1,
    prize = 0,
    currentPrize = 10,
    prizeCounter = 1,
    startGame;

if(!play) {
    alert("You did not become a millionaire, but can.");
} else {
    startGame = true;
    for (;startGame;) {
        let range = 5 * rangeCount;
        let randomNum = Math.floor(Math.random() * range) + 1;
        console.log(randomNum);
        let userNum;
        let gameOver;

        for (let attempts = 3;attempts > 0; attempts--) {
            if (attempts === 3) {
                currentPrize = 10 * prizeCounter;
            } else if (attempts === 2) {
                currentPrize = 5 * prizeCounter;
            } else {
                currentPrize = 2 * prizeCounter;
            }
            userNum = Number(prompt('Enter a number from 0 to ' + range +
                '\nAttempts Left: ' + attempts +
                '\nTotal Prize: ' + prize +
                '\nPossible prize on current attempt: ' + currentPrize));
            if (userNum === randomNum) {
                gameOver = false;
                prize += currentPrize;
                break;
            }
        }
        if (gameOver) {
            alert('Thank you for a game. Your prize is: ' + prize + '$.');
            startGame = confirm('Do you want to play again?');
            prize = 0;
            rangeCount = 1;
            prizeCounter = 1;
        } else {
            startGame = confirm('Congratulation! Your prize is: ' + prize + '$.' + ' Do you want to continue?');
            if (startGame && userNum === randomNum) {
                rangeCount *= 2;
                prizeCounter *= 3;
            } else {
                alert('Thank you for a game. Your prize is: ' + prize + '$');
                startGame = confirm('Do you want to play again?');
                prize = 0;
                rangeCount = 1;
                prizeCounter = 1;
            }
        }
    }
}