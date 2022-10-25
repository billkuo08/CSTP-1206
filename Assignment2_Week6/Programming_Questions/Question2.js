
let array1 = [4, 2, 1, 0, 5];
let array2 = [0, 1, 2, 3, 4];
let array3 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];
let array4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const missingArr = [];


const missingNumber = (array, n) => {

    array.sort((a, b) => { return a - b });
    let missingNum = array.filter((item) => {
        if (array.indexOf(item) !== item) {
            return true;
        }
        
    });

    if (isNaN(missingNum[0])) {

        return n;

    } else {

        return missingNum[0] - 1;
    }

}

console.log(`The missing number of the array is ${missingNumber(array1, 5)}\n`);// 3
console.log(`The missing number of the array is ${missingNumber(array2, 5)}\n`);// 5
console.log(`The missing number of the array is ${missingNumber(array3, 10)}\n`);// 8
console.log(`The missing number of the array is ${missingNumber(array4, 10)}\n`);// 10


