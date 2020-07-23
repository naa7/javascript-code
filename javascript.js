/*console.log("Hello world!");
//##############################
let x = 2;
let y = 3;
let z = x+y;
let d = (4+10+22-30+55)/5;
let b = (68+7-22+9+100)/5;
let w = (d+b)/2;

console.log("Sum =", z);
console.log("Average=",d);
console.log("Average=",b);
console.log("Average=",w);
//###############################
let num = 5;
if (num > 100) {
    console.log("$num is positive & greater than 100")
}
else if (num > 0) {
    console.log("$num is positive and less than 100")
}
else {
    console.log("$num is negative")
};
//################################

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("What is your name?\nAnswer: ", name => {
    readline.question('What is your grade?\nAnswer: ', grade => {
 
        if (grade >= 90) {
            console.log(`${name}'s Final grade: A`);
        }
        else if (grade >= 80) {
            console.log(`${name}'s Final grade: B`);
        }
        else if (grade >= 70) {
            console.log(`${name}'s Final grade: C`);
        }
        else if (grade >= 55) {
            console.log(`${name}'s Final grade: D`);
        }
        else if (grade < 55) {
            console.log(`${name}'s Final grade: F`);
        }
        else {
            console.log("Invalid Entry!");
        }
        readline.close();
    });
});


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name?\nAnswer: ', name => {
    readline.question('How old are you?\nAnswer: ', age => {
        console.log(`Hello ${name}!\nYou are ${age} old`);
        readline.close();
    });
});*/

for (let i = 1; i <= 30; i++) {
    let test = 0;
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
            ++test;
            break;
        }  
    }
    if (test == 0 && test != 1) {
        if (i == 1 || i == 3) 
            console.log(i,"is odd");
        else if (i == 2) 
            console.log(i,"is even");
        else
        console.log(i,"is prime");
    }
    else {
        if (i%2 == 0 || i == 2) 
            console.log(i,"is even");
        else if (i%2 == 1) 
            console.log(i,"is odd");
    }
};
