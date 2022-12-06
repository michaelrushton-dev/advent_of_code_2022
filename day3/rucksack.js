import { dataArray } from './data.js';

function rucksack() {
    let sum = 0;
    dataArray.forEach((item) => {
        let halfLength = item.length / 2;
        let firstHalf = item.split('').splice(0, halfLength);
        let secondHalf = item.split('').splice(halfLength);
        let duplicate = '';

        for (let i = 0; i < firstHalf.length; i++) {
            if (firstHalf.includes(secondHalf[i])) {
                duplicate = secondHalf[i];
            }
        }
        if (duplicate === duplicate.toLowerCase()) {
            // console.log(duplicate, Number(duplicate.charCodeAt(0) - 96));
            sum += Number(duplicate.charCodeAt(0) - 96);
        } else {
            // console.log(duplicate, Number(duplicate.charCodeAt(0) - 38));
            sum += Number(duplicate.charCodeAt(0) - 38);
        }
    });
    // console.log(sum);
}
rucksack();

//PART TWO

function badges() {
    let total = 0;
    //get array of chunks of three strings (triplets[])
    let triplets = [];
    for (let i = 0; i < dataArray.length; i = i + 3) {
        let chunk = [];
        chunk.push(dataArray[i], dataArray[i + 1], dataArray[i + 2]);
        triplets.push(chunk);
    }
    console.log(triplets);

    triplets.forEach((chunk) => {
        let firstLine = chunk[0].split('');
        let secondLine = chunk[1].split('');
        let thirdLine = chunk[2].split('');
        let matchingItem = '';

        for (let j = 0; j < firstLine.length; j++) {
            if (
                secondLine.includes(firstLine[j]) &&
                thirdLine.includes(firstLine[j])
            ) {
                matchingItem = firstLine[j];
            }
        }
        if (matchingItem === matchingItem.toLowerCase()) {
            // console.log(matchingItem, Number(matchingItem.charCodeAt(0) - 96));
            total += Number(matchingItem.charCodeAt(0) - 96);
        } else {
            // console.log(matchingItem, Number(matchingItem.charCodeAt(0) - 38));
            total += Number(matchingItem.charCodeAt(0) - 38);
        }
    });
    console.log({ total });
}
badges();
