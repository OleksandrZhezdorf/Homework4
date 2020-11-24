/* Задача с угадыванием*/

let num;
let randomresult;
let num1;
let num2;

do {
    result = prompt('Try to say the right number from 0 to 10');
    randomresult = Math.floor(Math.random()*10);
    console.log(randomresult);
    console.log(result);
    num1 = Number(result);
    num2 = Number(randomresult);
    console.log(randomresult == result);
} while (num1 != num2 && num1);
