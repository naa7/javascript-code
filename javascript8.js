function countdown(num) {
    if (num === 10)
        console.log(num);
    else {
        console.log(num);
        countdown(num + 1);
   }
}

// countdown(1);

function backwardString(string) {
    if (string.length === 1)
        console.log(string);
    else {
        let lastChar = string[string.length - 1];
        console.log(lastChar);
        string = string.slice(0,-1);
        backwardString(string);
   }
}

// backwardString("hello");

function sumNums(num) {
    if (num === 1) {
        return num;
    }
    let sum = num + sumNums(num - 1);
    return sum;
}

// let sum = sumNums(5);
// console.log(sum);

function isAVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}
function countVowels(string) {
    if (string.length === 0) {
        return 0;
    }
    let vowelsCount = 0;

    if (isAVowel(string[0])) {
        vowelsCount++;
    }
    vowelsCount += countVowels(string.slice(1));
    return vowelsCount;
}

let vowelsCount = countVowels('Hello world!');
console.log(vowelsCount);
