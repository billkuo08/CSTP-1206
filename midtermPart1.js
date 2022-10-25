//Q 27
let array = [2, 4, 11, 2, 4]
function mostRepeated(paraArr) {
    paraArr = [2, 4, 11, 2, 4].reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    let arr = Object.values(paraArr);
    let min = Math.min(...arr);
    let key = Object.keys(paraArr).find(key => paraArr[key] === min);
    return key;
}

console.log(mostRepeated(array));





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