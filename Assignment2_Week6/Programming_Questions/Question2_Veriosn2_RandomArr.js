const missingNumber = (n) => {

    let s = n + 1
    let array3 = [];

    // Null check
    if (n === 0) {
        console.log("Invalid input")
    }

    do {
        // Generating random number
        const randomNumber = Math.floor(Math.random() * s)

        // Pushing into the array only 
        // if the array does not contain it
        if (!array3.includes(randomNumber)) {
            array3.push(randomNumber);
        }

    } while (array3.length < n);

    // Printing the array elements
    console.log(array3)


    array3.sort((a, b) => { return a - b });
    console.log(array3)

    let missingNum = array3.filter((item) => {
        if (array3.indexOf(item) !== item) {
            return true;
        }

    });
    
    if (isNaN(missingNum[0])) {

        return n;

    } else {
        
        return missingNum[0] - 1;
    }


}

console.log(`The missing number of the array is ${missingNumber(5)}\n`);
//console.log(`The missing number of the array is ${missingNumber(10)}\n`);

