/*
Small program for working with arrays and using built-in methods (functions):
1) Array.isArray().
2) .indexOf().
3) typeof().
4) .slice().
5) .length.
6) .push().
7) .pop().
8) splice().
9) .concat().
10) .join().
11) .includes().
12) .shift().
13) .unshift().
14) .reverse().
*/

function array1D() {

    let array = [1,2,3,4,5];
    console.log('1D array =', array);
    

    /* Arrays, like strings, have a length property */
    let length = array.length;
    console.log('Length =', length);
    

    /* .indexOf is also an array method, and works 
        the same way as the string method of the same name 
    */
    let index = array.indexOf(3);
    console.log('Index of', array[index],'=', index);
    

    /* .slice is also an array method, and works the same
        way as the string method of the same name. 
    */
    let slice = array.slice(2,5);
    console.log('Sliced array =', slice);

    /* typeof checks the type of the tested variable.*/
    let object = typeof array;
    console.log('Type:', object);


    /* .isArray is also an array method, and works by giving 
        a boolean value for the tested variable.
    */ 
    let boolean = Array.isArray(array);
    console.log('Boolean:',boolean);


    /* .push takes one or more elements and adds them 
        to the end of the array..push returns the new 
        length of the array. 
    */
    let pushElement = array.push(6);
    console.log('Elemenet pushed =',pushElement);
    console.log(array);


    /* .pop removes one element from the end of the array. 
        it returns the removed element 
    */
    let popElement = array.pop();
    console.log('Element popped =', popElement);
    console.log(array);


    /* .shift works like .pop, but it removes the first 
        element instead 
    */
    let shiftElement = array.shift();
    console.log('Element shifted =', shiftElement);
    console.log(array);


    /* .unshift adds one or more elements to the 
        front of the array 
    */
    let unshiftElement = array.unshift(1);
    console.log('Length of unshifted array =', unshiftElement);
    console.log(array);


    /* .includes takes a value, and returns true
        if the value is an element in the array 
    */
    let includeElement = array.includes(7);
    console.log('Array includes 7 :', includeElement);


    /* .reverse mutates (changes) the original array, 
        reversing the order of its elements 
    */
    let reversedArray = array.reverse();
    console.log('Reversed array =', reversedArray);
    array.reverse();
    

    /* .splice mutates the original array; it's used to add
        or remove elements from the middle of an array 
        (instead of adding or removing from either end 
    */
   /* its first argument is an index; the second is a count of
      elements to delete from the element, starting at the provided index 
    */
   let splicedElementRemoved = array.splice(1,3);
   console.log('Spliced element removed =', splicedElementRemoved);
   console.log(array);
   
   let splicedElementChanged = array.splice(2,1,7);
   console.log('Spliced element changed =', splicedElementChanged);
   console.log(array);

   let splicedElementAdded = array.splice(2,1,9);
   console.log('Spliced element added =', array);

   let splicedElementAdd1 = array.splice(1,0,3);
   console.log('Spliced element added =', array);

    
   let splicedElementAdd2 = array.splice(3,0,7);
   console.log('Spliced element added =', array);


   /* .join concatenates the elements of an array into a string; 
      the original array is not changed 
    */
   let joinedArrayString1 = array.join();
   console.log('String array =', joinedArrayString1);
   console.log('original array =', array);
    
   let joinedArrayString2 = array.join(' and ');
   console.log('String array with a separator =', joinedArrayString2);
   console.log('original array =', array);


   /* .concat merges two or more arrays into one */
   /* it returns a new array and doesn't change the array on which
      is was called 
    */
   let newArray = [11,13,15,17,19];
   let mergedArrays = array.concat(newArray);
   console.log('Original a;rray =', array);
   console.log('New array = ', newArray);
   console.log('Arrays merged =', mergedArrays);
}

function array2D() {
    let array = [[1,3],[2,4],[5,7],[6,8], 10];
    console.log('2D array =', array);
    console.log('Length =', array.length);
    console.log('Inner array =', array[1]);
    console.log('Element of inner array =', array[2][1]);

    let pickyArray = [array[0][0], array[1][0], array[2][1], array[3][1], array[4]];
    console.log('Picky array =', pickyArray);

    for (let i = 0; i < array.length; ++i) {
        let element = array[i];
        if(Array.isArray(element)) {
            for (let j = 0; j < element.length; ++j) {
                let num = element[j];
                console.log('Array element ['+i+','+j+'] =', num);
            }
        }
        else {
           console.log('Array element ['+i+'] =', element);
        }
    }
}

function main() {
    array1D();
    array2D();
}

main();
