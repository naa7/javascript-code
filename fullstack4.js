/*
Small program for working with objects and using some built-in methods (functions):
1) 
2) 
3) 
*/

function object() {

    /* an object is a collection of key-value pairs */
    /* like arrays, objects store values, but instead of storing them in   numeric "indices", 
       objects store values in string "keys" 
    */
   /* object in js is the equivalent of map in C/C++. */
   /* create a new object using curly braces */
   /* an object's keys are always strings; you can omit the quotation marks */
   /* use bracket notation to access a value */
   /* pass a string into the brackets that corresponds with a key in the object */

   let object = {
       'A': 'Ahmed',
       'B': 'Bilal',
       'C': 'Camaal',
       'D': 'Dorah',
       'E': 'Emaan',
       'F': 'Fatimah',
       'G': 'Gamaal'
   };
    return object;
}

function nestedArrayInObject() {

    /* objects can store any type of value, including arrays and other objects */
    let object = {
        'Name': ['Ahmed', 'Bilal','Camaal', 'Dorah', 'Emaan', 'Fatimah', 'Gamaal'],
        'Age': ['21', '22', '23', '24', '25', '26', '27'],
        'Occuption': ['Scholar', 'Student', 'Cook', 'House-wife', 'Nurse', 'Accountant', 'Solider']
    };
    return object;
}

function nestedObjectInObject() {

    /* objects can store any type of value, including arrays and other objects */
    let object = {
        Self: {
            Name: 'Ahmed',
            Age:  '21',
            Occuption: 'Scholar',
        },
        Family: {
            Father: 'Muhammad',
            Mother: 'Roqayah',
            Brother: 'Ibraheem',
            Sister: 'Zaynab'
        }
    };
    return object;
}

function indexInObject(object, index) {
    
    /* use bracket notation to access a value */
    /* pass a string into the brackets that corresponds with a key in the object */
    /* use the for...in loop to loop through all of the keys in an object */
    for (let key in object) {
        if (key === index) {
            return object[key];
        }
    }
    return ('Key not found!');
}

function addKeyValuePair(object, key, value) {
    
    /* use bracket notation or dot notation to add a key/value pair */
    object[key] = value;
    // object.key = value;   ---> object.H = Hamman;  // no quotes needed with dot notation.
    return object;
}

function deleteKeyValuePair(object, key) {
    
    /* use the delete keyword to delete a key/value pair */
    /* use bracket notation or dot notation to delete a key/value pair */
    delete object[key];
    // delete object.key;   ---> delete object.H;   // no quotes needed with dot notation.
    return object;
}

function changeValue(object, key, value) {
   
    /* use bracket notation or dot notation to change a value */
    return addKeyValuePair(object, key, value);

}

function keyFound(object, key) {

    /* use the in operator to check if a key is in the object */
    let found = key in object;
    if (found) {
        console.log('Key('+key+') found:', found,'--> Value:', object[key], '\n');
        /* you can also use dot notation to access values */
        // console.log('Element =', object.A); // no quotes needed with dot notation.
    }
    else {
        console.log('Key('+key+') found:', found,'--> Value: Not found', '\n');
    }
    return found;
}

function objectLoopIteration(object) {

    /* use the for...in loop to loop through all of the keys in an object */
    for (let key in object) {
        console.log('Name', key, 'is', object[key]);
    }
    console.log('\n');
}

function objectToArray(object) {

    /* use Object.keys() to get an array of the keys in the object */
    array = Object.keys(object);
    return array;
}

function arrayLoopIteration(array) {

    for (let i = 0; i < array.length; ++i) {
            console.log('Array['+i+'] =', array[i]);
    }
    console.log('\n');
}

function accessNestedArrayInObject(object, key) {

    let array = object[key];
    return array;
}

function accessValueInObjectNestedArray(object, key1, key2, key3, index) {

    let array1 = accessNestedArrayInObject(object,key1);
    let array2 = accessNestedArrayInObject(object,key2);
    let array3 = accessNestedArrayInObject(object,key3);
    return [array1[index], array2[index], array3[index]];

}

function main() {

    let names = object();
    console.log('Object =', names);
    console.log('Type:', typeof(names), '\n')

    let key1 = 'T';
    let key2 = 'C';
    let element = indexInObject(names, key1);
    console.log('Key('+key1+'):', element,'\n');
    
    let newNames1 = addKeyValuePair(names,'H','Hammam');
    let pair1 = indexInObject(newNames1, 'H');
    console.log('Value added:', pair1);
    console.log('Object after adding key/value pair =', newNames1, '\n');
    
    let newNames2 = deleteKeyValuePair(newNames1,'H');
    console.log('Value deleted:', pair1);
    console.log('Object after deleting key/value pair =', newNames2, '\n');
    
    let value1 = indexInObject(newNames2, 'G');
    let changedNames = changeValue(newNames2, 'G', 'Galaal');
    let value2 = indexInObject(newNames2, 'G');
    console.log('Old value:', value1,'--> New value:', value2);
    console.log('Object after changing value =', changedNames, '\n');

    let flag1 = keyFound(newNames2, key1);
    let flag2 = keyFound(newNames2, key2);
    let objectIteration = objectLoopIteration(newNames2);

    let array = objectToArray(newNames2);
    console.log('Object to array =', array, '\n');
    let arrayIteration = arrayLoopIteration(array);

    let arrayInObject = nestedArrayInObject();
    console.log('Object with nested arrays =', arrayInObject,'\n');

    let array1 = accessNestedArrayInObject(arrayInObject, 'Name');
    console.log('Nested array =', array1,'\n');

    let value3 = accessValueInObjectNestedArray(arrayInObject, 'Name', 'Age', 'Occuption', 5);
    console.log('Information =', value3,'\n');

    let objectInObject = nestedObjectInObject();
    console.log('Object with nested objects =', objectInObject,'\n');
    console.log('Self =', objectInObject.Self,'\n');
    console.log('Family =', objectInObject.Family,'\n');
}

main();
