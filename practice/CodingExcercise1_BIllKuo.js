// 1. Write a function to find the sum of the elements inside the array
console.log("Q1");

const MyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
getSum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(`The sum of the array is ${getSum(MyArr)}`);

// 2. Using a function for loop print all even numbers up to n (parameter in function);
console.log("\nQ2");

allEvenNums = (n) => {
    for (let j = 0; j <= n; j++) {
        if (j % 2 === 0) {
            console.log(j);
        };

    };
};
allEvenNums(10);


// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
// For example - "Crayzy" "Yes"
console.log("\nQ3");
hasYandy = (x) => {
    let str = JSON.stringify(x);
    let lowY = str.includes("y");
    let upY = str.includes("Y");
    if (lowY || upY) {
        return "YES";
    }    
    else {
        return "Error";
    };

};
console.log(hasYandy("Crazy"));
console.log(hasYandy("York"));
console.log(hasYandy("hello"));
console.log(hasYandy(0));


// 4. Write a function to find the factorial of a given number n
console.log("\nQ4");
findFactorial = (num) => {
    let answer = 1;
    if (num == 0 || num == 1) {
        return answer;
    } else {
        for (let i = num; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }

}
console.log(`The factorial of the given number is ${findFactorial(5)}`);


// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F
console.log("\nQ5");
reportCard = (subj1 = 0, subj2 = 0, subj3 = 0, subj4 = 0) => {
    let subjects = [subj1, subj2, subj3, subj4];
    let total = 0;
    let average = 0;
    for (let score in subjects) {
        total += subjects[score];
        average = total / subjects.length;        
    }
    if (average >= 90) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else {
        return "F";
    }

}

console.log(`The grade of the student is ${reportCard(40,40,40,40)}`);
console.log(`The grade of the student is ${reportCard(70, 70, 70, 70)}`);
console.log(`The grade of the student is ${reportCard(90, 90, 90, 90)}`);
console.log(`The grade of the student is ${reportCard(50, 50, 50, 50)}`);





// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******
console.log("\nQ6");

starPattern = (rowOfStars) => {
    let stars = "";
    let i = 0;
    while ( i < rowOfStars) {
        stars += "*";
        console.log(stars)
        i++;
    }

}
starPattern(7);


// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *
console.log("\nQ7");
starPattern2 = (rowOfStars) => {
    let stars = "";
    let i = 0;
    while ( i < rowOfStars) {
        stars += "*";
        console.log(stars)
        i++;
    }

    let j = rowOfStars;
    while ( j > 1){
        stars = stars.slice(0,-1);
        console.log(stars);
        j--;
    }

}
starPattern2(7);


// 8. Write a function to reverse a string
console.log("\nQ8");
reverseStr = (y) => {

    if (typeof (y) === 'string') {
        let splitStr = y.split("");
        let reverseArr = splitStr.reverse();
        let reverseStr = reverseArr.join("");
        return reverseStr;
    } else {
        return "Please enter a proper string";
    }


}

console.log(reverseStr("Hello"));
