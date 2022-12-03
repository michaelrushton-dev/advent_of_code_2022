import { turnsArray } from './data.js';

//OPPONENT - rock - A
//paper - B
//scissor -C

//ME -
// rock - X
//paper - Y
//scissor -Z

let totalScore = 0;

function rockPaperScissors(opponent, me) {
    let score = 0;
    //points for what shape you chose
    if (me === 'X') {
        //ME ROCK
        score++;
    } else if (me === 'Y') {
        //ME PAPER
        score += 2;
    } else {
        //ME SCISSORS
        score += 3;
    }
    //points for match outcome
    //OPPONENT ROCK
    if (opponent === 'A' && me === 'X') {
        //rock v rock
        score += 3;
    } else if (opponent === 'A' && me === 'Y') {
        //rock v paper
        score += 6;
    } else if (opponent === 'A' && me === 'Z') {
        //rock v scissors
        score += 0;
    }
    //OPPONENT PAPER
    if (opponent === 'B' && me === 'X') {
        //paper v rock
        score += 0;
    } else if (opponent === 'B' && me === 'Y') {
        //paper v paper
        score += 3;
    } else if (opponent === 'B' && me === 'Z') {
        //paper v scissors
        score += 6;
    }
    //OPPONENT SCISSORS
    if (opponent === 'C' && me === 'X') {
        //scissors v rock
        score += 6;
    } else if (opponent === 'C' && me === 'Y') {
        //scissors v paper
        score += 0;
    } else if (opponent === 'C' && me === 'Z') {
        //scissors v scissors
        score += 3;
    }
    return score;
}
for (let i = 0; i < turnsArray.length; i++) {
    let opponent = String(turnsArray[i][0]);
    let me = String(turnsArray[i][2]);
    totalScore += rockPaperScissors(opponent, me);
}
console.log({ totalScore });

//************PART 2*************** */
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win

let partTwoTotalScore = 0;
// (1 for Rock, 2 for Paper, and 3 for Scissors)
function partTwoRockPaperScissors(opponent, me) {
    let score = 0;
    //OPPONENT ROCK (1)
    if (opponent === 'A' && me === 'X') {
        //LOSE(0) - SCISSORS(3)
        score += 3;
    } else if (opponent === 'A' && me === 'Y') {
        //DRAW(3) - ROCK(1)
        score += 4;
    } else if (opponent === 'A' && me === 'Z') {
        //WIN(6) - PAPER(2)
        score += 8;
    }
    //OPPONENT PAPER (2)
    if (opponent === 'B' && me === 'X') {
        //LOSE(0) - ROCK(1)
        score += 1;
    } else if (opponent === 'B' && me === 'Y') {
        //DRAW(3) - PAPER(2)
        score += 5;
    } else if (opponent === 'B' && me === 'Z') {
        //WIN(6) - SCISSORS(3)
        score += 9;
    }
    //OPPONENT SCISSORS (3)
    if (opponent === 'C' && me === 'X') {
        //LOSE(0) - PAPER(2)
        score += 2;
    } else if (opponent === 'C' && me === 'Y') {
        //DRAW(3) - SCISSORS(3)
        score += 6;
    } else if (opponent === 'C' && me === 'Z') {
        //WIN(6) - ROCK(1)
        score += 7;
    }
    return score;
}

for (let i = 0; i < turnsArray.length; i++) {
    let opponent = String(turnsArray[i][0]);
    let me = String(turnsArray[i][2]);
    partTwoTotalScore += partTwoRockPaperScissors(opponent, me);
}
console.log({ partTwoTotalScore });
