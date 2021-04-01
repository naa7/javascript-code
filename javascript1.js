/*  
small program for counting words, characters, newlines, 
tabs, and spaces in strings
*/

function count(string) {
    let vari = string;
    let count = vari.length - 1;
    let charCount = wordCount = spaceCount = 0;
    let newlineCount = tabCount = state = 0;

    for (let i = 0; i <= count; ++i) {
        
        if(vari[i] == ' ') { 
            ++spaceCount;
        }
        else if (vari[i] == '\n') {
            ++newlineCount;
        }
        else if (vari[i] == '\t') {
            ++tabCount;
        }
        else
            ++charCount;
        if (vari[i] == ' ' || vari[i] == '\t' || vari[i] == '\n') {
            state = 1;
            if (vari[i+1] == ' ' || vari[i+1] == '\t' || vari[i+1] == '\n')
                ++i;
        }
        if (state == 1) {
            state = 0;
            ++wordCount;
        }
        if (i == count)
            ++wordCount;
    }

    console.log(vari)
    console.log("Number of words =",wordCount);
    console.log("Number of characters =",charCount);
    console.log("Number of newlines =",newlineCount);
    console.log("Number of spaces =",spaceCount);
    console.log("Number of tabs =",tabCount);
}

function main() {
    let stringOne = 'Hello world!\nWelcome\there'; 
    let stringTwo = 'Hi there!\nMy name is\tLoading...\t\nWhat is your name?';
    count(stringOne);
    count(stringTwo);
}

main();