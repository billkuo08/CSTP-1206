
function greet() {
    console.log("Hello Prabh");
}

greet();

function sayHi (callback){
    callback();
}

sayHi(greet);

