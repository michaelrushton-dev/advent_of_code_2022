import { dataArray } from './data.js';

function cleanup() {
    let task1count = 0;
    let task2count = 0;
    //forEach pair of ranges
    dataArray.forEach((pair) => {
        let firstRange = 0;
        let secondRange = 0;
        let firstLower = 0;
        let firstUpper = 0;
        let secondLower = 0;
        let secondUpper = 0;
        //splitting into first range and second range
        let splitPair = pair.split('');
        splitPair.forEach((item, index, arr) => {
            if (item === ',') {
                firstRange = arr.slice(0, index);
                secondRange = arr.slice(index + 1);
                // console.log({ firstRange });
                // console.log({ secondRange });
            }
        });
        //splitting each range into its lower and upper numbers
        firstRange.forEach((item, index, arr) => {
            if (item === '-') {
                firstLower = Number(arr.slice(0, index).join(''));
                firstUpper = Number(arr.slice(index + 1).join(''));
                //     console.log({ firstLower });
                //     console.log({ firstUpper });
            }
        });
        secondRange.forEach((item, index, arr) => {
            if (item === '-') {
                secondLower = Number(arr.slice(0, index).join(''));
                secondUpper = Number(arr.slice(index + 1).join(''));
                // console.log({ secondLower });
                // console.log({ secondUpper });
            }
        });
        // TASK 1 - comparing values from upper and lower for each case
        if (
            (firstLower <= secondLower && firstUpper >= secondUpper) ||
            (secondLower <= firstLower && secondUpper >= firstUpper)
        ) {
            task1count++;
        }
        // TASK 2 - checking for ALL overlaps (not just fully covered ones as in task 1)

        //making two new arrays of all the numbers between each range (first and second)
        //which will then be compared
        let firstRangeNumArr = [];
        for (let index = firstLower; index <= firstUpper; index++) {
            firstRangeNumArr.push(index);
        }
        let secondRangeNumArr = [];
        for (let index = secondLower; index <= secondUpper; index++) {
            secondRangeNumArr.push(index);
        }
        //checking if the second array contains at least one of the element from the first
        //and if it does, increment the count and break the loop (at the first instance of a duplicate)
        for (let i = 0; i < firstRangeNumArr.length; i++) {
            let overlap = secondRangeNumArr.some(
                (elem) => elem === firstRangeNumArr[i]
            );
            if (overlap) {
                task2count++;
                break;
            }
        }
        // console.log(firstRangeNumArr);
        // console.log(secondRangeNumArr);
    });
    console.log({ task1count });
    console.log({ task2count });
}
cleanup();
