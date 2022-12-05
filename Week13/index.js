// REST Operator

function mltiply(num1, num2) {
    return num1 * num2;
}

function multiplyingWithRest(...nums) {
    console.log(nums);
}

function multiplyingWithRest(...nums) {
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total = total * nums[i];
    }
    return total;
}

function sumWithRest(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;

}

let finalMultipleValue = multiplyingWithRest(1, 2, 3, 4,);
let finalSumValue = sumWithRest(1, 2, 3);

console.log(finalSumValue);
console.log(finalMultipleValue);

function averageSum(type, ...typeList) {
    let length = typeList.length;
    //let total = 0;
    let total = sumWithRest(...typeList);

    // for (let i = 0; i < typeList.length; i++) {
    //     total = total + typeList[i];
    // }

    let average = total / length;
    console.log(`We are calculating ${type} average and answer is ${average}`);
}

averageSum("Marks", 80, 90, 100);

function greeting(...values) {
    let finalOutput = "";
    for (let i = 0; i < values.length; i++) {
        finalOutput = finalOutput + " " + values[i];
    }
    console.log(finalOutput);
}

greeting("Hello", "World", "How", "Are", "You");

//Spread Operator

let array1 = [1,2,3,4];
let array2 = [5,6,7];

let combineArraywithConcat = array1.concat(array2);//First way

console.log(combineArraywithConcat);

//using spread operator
let combineArraywithSpread = [...array1, ... array2];

console.log(combineArraywithSpread);

//Spread Operator in Objects

let student = {
    name: "Daniel",
    age: 20,
    email: "daniel@gmail.com"
}

let studentWithVCCCollege ={
    ...student,
    college:"VCC",
    name:"Mike"
}

console.log(studentWithVCCCollege);

console.log(Math.max(1, 11, 2, 3, 4)) //this returns the maximum value

let finalMaxInArray = [20, 40, 50, 100];

console.log(Math.max(...finalMaxInArray));// this returns the maximum value


// Destructuring ***************

let movieObject = {
    title:"Pirates of the Caribbean",
    actor:"Johnny Depp",
    actress:"Amber Heard"
}

//Extrat value from movie object

let titleMovie = movieObject.title;//One way

let titleMovie2 = movieObject["title"]; //Second way

let {title, actor="Dwayne Johnson"} = movieObject; // Default value will be ignored here

let {age = 40} = movieObject;

console.log(title, actor, age);

let fruitsList = ["Orange", "Mango", "Papaya", "Grapdes"];

 //Default value id ignored if it already exists in the array
let [ x, second, third="Radish", fourth, fifth="Dragonfruit" ] = fruitsList;

console.log(x, second, third, fourth,fifth)