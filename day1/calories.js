import { dataArray } from './data.js';
let counter = 0;
let newArray = [];
function calories() {
    dataArray.forEach((item) => {
        if (item == '') {
            newArray.push(counter);
            counter = 0;
        } else {
            counter += Number(item);
        }
    });

    let arrayLength = newArray.length;
    let newSortedArray = newArray.sort(function compareFn(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log('task 1 answer :', newSortedArray[arrayLength - 1]);

    //******* TASK 2 *******
    let topThree =
        newSortedArray[arrayLength - 1] +
        newSortedArray[arrayLength - 2] +
        newSortedArray[arrayLength - 3];
    console.log('task 2 answer : ', { topThree });
}

calories();
