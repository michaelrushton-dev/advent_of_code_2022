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
    let task2resultArray = [];
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
        let sliceAmountNum =
            stacks[`${numbers.from}`].length - `${numbers.amount}`;
        let slice = stacks[`${numbers.from}`].slice(sliceAmountNum);
        console.log(
            stacks[`${numbers.to}`].splice(
                sliceAmountNum,
                `${numbers.amount}`,
                slice
            )
        );
        // console.log(slice);
    });

    // console.log(stacks);
    //pushing the last element of each array (top of each pile of boxes) to task1resultArray
    //using Object.keys() for getting 'length' of object - so it's technically scalable

    for (let index = 1; index <= Object.keys(stacks).length; index++) {
        let length = stacks[index].length;
        task2resultArray.push(stacks[index][length - 1]);
    }
    console.log(task2resultArray.join(''));
    // TASK 1 ANSWER -- RNZLFZSJH
}
stacks();
