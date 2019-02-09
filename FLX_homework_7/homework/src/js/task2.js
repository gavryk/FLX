let play = confirm('Do you want to play a game?'),
    range = 5,
    prize = 0,
    totalPrize = 10,
    currentPrize = 10,
    attempts = 3,
    startGame = true,
    randomNum;

if (play) {
    startGame = true;
    for (;startGame;) {
        randomNum = Math.floor(Math.random() * range) + 1;
        console.log(randomNum);
        let userNum = Number(prompt('Enter a number from 0 to ' + range +
                '\nAttempts Left: ' + attempts +
                '\nTotal Prize: ' + totalPrize +
                '\nPossible prize on current attempt: ' + currentPrize));

        if (userNum === randomNum) {
            prize += currentPrize;
            let nextGame = confirm('Congratulation! Your prize is: ' + prize + '$.' + 'Do you want to continue?');
            if (nextGame) {
                currentPrize *= 3;
                randomNum = Math.floor(Math.random() * range);
                attempts = 3;
                range += 5;
                totalPrize *= 3;
            } else {
                break;
            }
            continue;
        } else if (attempts === 1) {
            break;
        }
        attempts--;
        currentPrize = Math.ceil(currentPrize / 2);
    }
    alert('Thank you for a game. Your prize is: ' + prize + '$.');
        let newGame = confirm('Do you want to play again?');
        if (newGame) {
            prize = 0;
            currentPrize = 10;
            attempts = 3;
        } else {
            startGame = false;
        }
} else {
    alert('You did not become a millionaire, but can.');
}