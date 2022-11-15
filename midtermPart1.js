//Q 27
let array = [2, 4, 11, 2, 4]

function singleElement(array) {
    let map = {};
    let output;
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            map[array[i]] = map[array[i]] + 1;
        } else {
            map[array[i]] = 1;
        }
        for (let key in map) {
            if (map[key] === 1) {
                output = key;
            }
        }
    }
    return output;

}

console.log(singleElement(array));

//Q 28
let array2 = [2,4,1,2,4,2];

function mostRepeated(array){
    let map = {};
    let max = 0;
    let val;

    for(let i = 0; i < array.length; i++){

        if(map[array[i]]){
            map[array[i]] = map[array[i]] + 1;
        }else{
            map[array[i]] = 1;
        }
    }

    for(let key in map){
        if(map[key] > max){
            max = map[key];
            val = key;
        }
    }
    return val;
}

console.log(mostRepeated(array2)); // 2









//Q 28
// let array = [2,4,1,2,4,2];
// function mostRepeated(paraArr){
// paraArr = [2,4,1,2,4,2].reduce(function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//   }, {});
//    let arr = Object.values(paraArr);
//    let max = Math.max(...arr);
//     let key = Object.keys(paraArr).find(key => paraArr[key] === max);
//     return key;
// }

// console.log(mostRepeated(array));

//Q 29
// let array = [2, 11, -20, 3, 0 -3]
// function minElement(paraArr){

// return Math.min(...paraArr)
// }
// console.log(minElement(array))