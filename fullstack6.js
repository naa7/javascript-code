/* Small program to work with Pass-by-value,Pass-by-reference */
/*
   primitive values in JS:
    - string  
    - number  
    - boolean  
    - undefined  
    - null  
    - ES6 symbols 
   complex values in JS:
    - objects (including arrays)  
    - functions 
*/
/* when you assign a primitive value to a variable, the variable
   'stores' a copy of that value */

let x = 10; // x stores the value 20
x = 20; // x now stores a new value, 20
console.log(x);


/* when you assign a complex value to a variable, the variable
   DOES NOT store a copy of the value */
/* instead, the variable stores a reference in memory; the 
   reference points to the value */

let first = [1,2,3,4,5];    // first stores a reference to [1,2,3,4,5]
let second = [1,2,3,4,5];   // second stores a new reference to a new array

/* since first and second reference different arrays, pushing
   a value into second will not affect the array referenced by first */

first1 = first.push(7); // first still stores the same reference
second1 = second.pop(); // second still stores the same reference
console.log(first);
console.log(second);

/* === will compare complex values by reference, not by value! */
console.log(first === second);


let third = [1,3,5,7,9];

/* fourth now stores a copy of the REFERENCE that wasoriginally stored in third */
let fourth = third; 
console.log(third);
console.log(fourth);

/* third and fourth share the same reference to the same array! */
third1 = third.push(11);
console.log(third);
console.log(fourth);
fourth1 = fourth.shift();
console.log(third);
console.log(fourth);
third2 = third.unshift(1);
console.log(third);
console.log(fourth);
fourth2 = fourth.pop();
console.log(third);
console.log(fourth);

/* === will compare complex values by reference, not by value! */

console.log(third === fourth);  // third and fourth share the same reference


let fifth = [2,4,6,8,10];
let sixth = fifth.slice();  // slice creates a new array!
fifith1 = fifth.push(12);   // fifth and sixth reference different arrays
console.log(fifth);
console.log(sixth);

/* === will compare complex values by reference, not by value! */

console.log(fifth === sixth);   // fifth and sixth do NOT share the same reference


/* if an array has a complex value as an element, only the reference to that
   complex value is copied into the new array */
/* that's why we say slice makes a "shallow" copy of an array; it doesn't make
   new copies of any complex values stored inside the array */

let seventh = [1,[2,4]];
let eighth = seventh.slice();
console.log(seventh);
console.log(eighth);

/* === will compare complex values by reference, not by value! */

console.log(seventh === eighth);   // fifth and sixth do NOT share the same reference
let seventh1 = seventh.push(3);
console.log(seventh);
console.log(eighth);
console.log(seventh[1]);
console.log(eighth[1]);

/* === will compare complex values by reference, not by value! */

console.log(seventh[1] === eighth[1]);   // fifth and sixth do NOT share the same reference