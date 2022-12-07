import { moves } from './data.js';

function getNumbers(instructions) {
    //extract the numbers from each line and return them as key:value pairs in an object
    let split = instructions.split(' ');
    let list = [];
    for (let i = 0; i < split.length; i++) {
        //if number push to list array
        if (split[i].toUpperCase() === split[i].toLowerCase()) {
            list.push(split[i]);
        }
    }
    //arrange the list array into an object to be returned
    let amount = list[0];
    let from = list[1];
    let to = list[2];
    return { amount, from, to };
}

function stacks() {
    let resultArray = [];
    let stacks = {
        1: ['H', 'R', 'B', 'D', 'Z', 'F', 'L', 'S'],
        2: ['T', 'B', 'M', 'Z', 'R'],
        3: ['Z', 'L', 'C', 'H', 'N', 'S'],
        4: ['S', 'C', 'F', 'J'],
        5: ['P', 'G', 'H', 'W', 'R', 'Z', 'B'],
        6: ['V', 'J', 'Z', 'G', 'D', 'N', 'M', 'T'],
        7: ['G', 'L', 'N', 'W', 'F', 'S', 'P', 'Q'],
        8: ['M', 'Z', 'R'],
        9: ['M', 'C', 'L', 'G', 'V', 'R', 'T'],
    };
    moves.forEach((elem) => {
        let numbers = getNumbers(elem);
        //select FROM
        //pop one box off FROM
        //push one (popped) box to TO
        //loop this action for AMOUNT
        for (let i = 0; i < `${numbers.amount}`; i++) {
            let popped = stacks[`${numbers.from}`].pop();
            stacks[`${numbers.to}`].push(popped);
        }
    });
    //pushing the last element of each array (top of each pile of boxes) to resultArray
    //using Object.keys() for getting 'length' of object - so it's technically scalable
    for (let index = 1; index <= Object.keys(stacks).length; index++) {
        let length = stacks[index].length;
        resultArray.push(stacks[index][length - 1]);
    }
    console.log(resultArray.join(''));
    // TASK 1 ANSWER -- RNZLFZSJH
}
stacks();
