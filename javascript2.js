/*
Small program for working with arrays. Program's features:
1) Iteration.
2) Reversed iteration.
3) Reversed array.
4) Array slicing.
5) Element's index in array.
6) Search for element of array.
7) Adding element to array.
8) Deleting element from array.
9) Size of array.
*/

function arrayIteration(array) {
    let count = array.length - 1;

    for (let i = 0; i <= count; ++i) {
        console.log('Array element['+i+'] = [', array[i],']');
    }
}

function specificArrayIteration(array,startldx,endldx = 0) {
    if (endldx < 1 && endldx !== 0) {
        endldx = array.length + endldx;
    }
    else {
        endldx = array.length - 1;
    }
    if (startldx < 0) {
        startldx = array.length + startldx;
    }
    
    for (let i = startldx; i <= endldx; ++i) {
        console.log('Array element['+i+'] = [', array[i],']');        
    }
}

function reversedArrayIteration(array) {
    let count = array.length - 1;

    for (let i = count; i >= 0; --i) {
        console.log('Array element['+i+'] = [', array[i],']');
    }
}

function reversedArray(array) {
    let count = array.length - 1;
    let tempArray = [];
    let index = 0;

    for (let i = count; i >= 0; --i) {
        tempArray[index] = array[i];
        ++index;
    }
    array = tempArray;
    return array;
}

function isElementFound(array,element) {
    let count = array.length - 1;

    for (i = 0; i <= count; ++i) {
        if (array[i] === element) {
            return console.log('Element found:',true);
        }
    }
    return console.log('Element found:',false);
}

function indexOfElement(array,element) {
    let count = array.length - 1;

    for (let i = 0; i <= count; ++i) {
        if (array[i] === element) {
            return console.log('Element index =',i);
        }
    }
    return console.log('Element not found!');
}

function addElement(array,element,index = array.length) {
    let count = array.length - 1;
    let position = 0;
    let tempArray1 = [];
    let tempArray2 = [];

    if (index !== array.length && index !== 0) {
        for (let i = 0; i < index; ++i) {
            tempArray1[i] = array[i]; 
        }

        tempArray1[index] = element;

        for (let i = index; i <= count; ++i) {
            tempArray2[position] = array[i];
            tempArray1[i+1] = tempArray2[position];
            ++position; 
        }
        
        array = tempArray1
    }
    else if (index === 0) {
        tempArray1[0] = element;
        for (let i = 0; i <= count; ++i) {
            tempArray1[i+1] = array[i];
        }
        array = tempArray1;
    }
    else {
        array[index] = element;
    }
    arrayIteration(array);
}

function deleteElement(array,index = array.length - 1) {
    let count = array.length - 1;
    let tempArray = [];

    for (let i = 0; i < count; ++i) {
        if (i < index) {
            tempArray[i] = array[i];
        }
        else if(i === index) {
            tempArray[i] = array[i+1];
        }
        if (i > index) {
            tempArray[i] = array[i+1]; 
        }
    }
    array = tempArray;
    arrayIteration(array);
}

function sizeOfArray(array) {
    let size = array.length;
    
    console.log('Size of array =', size);
}

function main() {
    let array = [1,2,3,4,5,6,7,8,9,10]; 

    arrayIteration(array);
    specificArrayIteration(array,3);
    reversedArrayIteration(array);
    let newArray = reversedArray(array);
    console.log(newArray);
    isElementFound(array,3);
    indexOfElement(array,7);
    addElement(array,30,3);
    deleteElement(array,5);
    sizeOfArray(array);
}

main();
