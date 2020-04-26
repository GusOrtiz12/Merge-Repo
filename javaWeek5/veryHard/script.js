const letter = (string) => {
    let counter = 0;

    let arr = string.split('');

    for (let x = 0; x < arr.length; x++){

        for(let y = 0; y < arr.length; y++){
            if(arr[x] === arr[y]){
                counter++;
            }
        }
        if (counter > 1){
            counter = 0;
            continue;
        } else {
            return arr[x];
        }
    }
}

let string1 = 'what a cloudy and musty day it has been :(';
let string2 = 'i really like the new nike SB, they release in april.'
let string3 = 'pineapple in pizza should not be considered a crime';
console.log(letter(string1));
console.log(letter(string2));
console.log(letter(string3));