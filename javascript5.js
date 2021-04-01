/* Small program for working with objects and nested methods (functions). */

let calculator = {

    line: '#############################',
    greeting: 'Welcome to simple calculator!',

    sum: function (num1, num2) {
        console.log(calculator.line);
        console.log(calculator.greeting);
        /* JS has a keyword, this, you can use to reference 
           the object in a method 
        */
       /* this is literally just another reference to the calculator object */
        //console.log(this.greeting);
        let sum = num1 + num2;
        console.log('##########');
        return sum;
    },
    
    difference: function (num1, num2) {
        //console.log(calculator.greeting);
        /* JS has a keyword, this, you can use to reference 
           the object in a method 
        */
       /* this is literally just another reference to the calculator object */
       console.log(calculator.line);
       console.log(calculator.greeting);
        let difference = num1 - num2;
        console.log('##########');
        return difference;
    },
    
    multiplication: function (num1, num2) {
        console.log(calculator.line);
        console.log(calculator.greeting);
        //console.log(this.greeting);
        let multiply = num1 * num2;
        console.log('##########');
        return multiply;
    },

    division: function (num1, num2) {
        console.log(calculator.line);
        console.log(calculator.greeting);
        //console.log(this.greeting);
        let divide = num1 / num2;
        console.log('##########');
        return divide;
    },

    getThis: function () {
        return this;
    },

    checkThis: function() {
        console.log(calculator.line);
        let flag = false;
        let This = calculator.getThis();
        if (This === calculator) {
            flag = true;
            console.log('Calculator equals this (inside object):', flag); 
        }
        else {
            console.log('Calculator equals this (inside object):', flag);
        }
        return flag;
    }
};

function main() {

    let sum = calculator.sum(3,3);
    console.log('Result =', sum);
    let dif = calculator.difference(5,2);
    console.log('Result =', dif);
    let mul = calculator.multiplication(2,4);
    console.log('Result =', mul);
    let div = calculator.division(8,6);
    console.log('Result =', div);
    let doesThisEqualCalculator = calculator.checkThis();
}

main();