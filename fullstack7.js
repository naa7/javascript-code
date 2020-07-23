
/* Small program for working with higher order functions */

/* In JS, functions are 'first-class objects', which is another 
   way of saying that functions are like any other value in JS */

function names() {
    let names = ['Ahmed', 'Muhammad', 'Bilal', 'Hamed', 'Hamman'];

    /* .forEach is an array method; it accepts a callback as its only argument */
    /* .forEach calls the callback for each element in the array */
    /* when .forEach calls the callback, it passes the current element as the first argument of the callback */
    return names;
   
}

function forEachFunc() {
    let names = ['Ahmed', 1, 'Bilal', 2, 'Hamman', 3];

    /* .forEach is an array method; it accepts a callback as its only argument */
    /* .forEach calls the callback for each element in the array */
    /* when .forEach calls the callback, it passes the current element as the first argument of the callback */
    names.forEach(typeOf1);
    names.forEach(typeOf2);
}

/* functions that take a function or return a function are called "higher-order functions" */
function sayHello(names) {
    let namez = names();  // invoking this time  
    for (let i = 0; i < namez.length; ++i) {
        let name = namez[i]
        console.log('Hello', name + '!');    
    }
}

/* functions that take a function or return a function are called "higher-order functions" */
function sayBye(names) {
    let namez = names();    // invoking this time
    for (let i = 0; i < namez.length; ++i) {
        let name = namez[i];
        console.log('Bye', name + '!');
    }
}

/* functions that take a function or return a function are called "higher-order functions" */
function arrayWithNestedFunction() {
    /* how do we call all the functions in the array? how have we always
       looped through an array of values? */
    /* functions aren't special. we can push them into an array, too! */
    let array = [sayHello, sayBye];
    console.log(array);
    for (let i = 0; i < array.length; ++i) {
        let func = array[i];    // each element is a function!
        let funcc = func(names);    // invoking this time
    }
    return array;
}

function typeOf1(variable) {
    console.log(typeof variable);
}

/* the callback passed into forEach also takes an optional second argument. 
   forEach passes the current index of the element as the second argument. */
function typeOf2(variable, forEachOptionalParameter) {
        console.log(typeof variable, forEachOptionalParameter);
}

function main() {
    forEachFunc();
    let arrayOfFunction = arrayWithNestedFunction();
    typeOf1('arrayOfFunction');
    typeOf1(arrayOfFunction);
    typeOf1(sayHello),
    typeOf1(sayBye);
    sayHello(names);
    sayBye(names);
}

main();