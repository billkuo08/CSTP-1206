
let student = [
    {
        name: "Danial",
        email: "daniel@gmail.com",
        marks: [80, 60, 50, 70, 95]
    },
    {
        name: "Mark",
        email: "mark@gmail.com",
        marks: [99, 40, 84, 72, 60]
    },
    {
        name: "Stacy",
        email: "stacy@gmail.com",
        marks: [8, 30, 11, 0, 20]
    },
    {
        name: "Geri",
        email: "geri@gmail.com",
        marks: [100, 99, 95, 85, 99]
    },

]

let highestOfSum = (data) => {
    let marksArr = [];
    let sum = [];
    let max = 0;

    for (let key in data) {

        marksArr.push(data[key].marks);

    }

    for (let i = 0; i < marksArr.length; i++) {

        let sumOfArray = marksArr[i].reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        sum.push(sumOfArray);

        max = sum.reduce((accumulator, currentValue) => {
            return Math.max(accumulator, currentValue);
        });



    }
    //console.log(sum);
    return max;

}

console.log(highestOfSum(student));



/*

 // let sumOfMarks = (item) => {
    //     sum += item;
    // }

     // marksArr[i].forEach(sumOfMarks);    
        // console.log(sum); 
        // sum = 0; 
 */


/* 

let maxValue = sum.reduce((accumulator, currentValue) => {
    return accumulator >  currentValue ? accumulator : currentValue
 }, -Infinity)
 
 */