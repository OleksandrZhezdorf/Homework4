/* пример while с итерацией и прерыванием цикла*/
/*let userIsHappy = true;
let number = 0;
while(number < 10 || userIsHappy) {
  if(number == 5) {
     break;
  }
  userIsHappy = confirm ('Are you happy that the number is ' + ++number + "?");
}


/* пример do с итерацией и прерыванием цикла*/
/*let userIsHappy = true;
let number = 0;
do {
    if(number == 7) {
       break;
    }
    userIsHappy = confirm ('Are you happy that the number is ' + ++number + "?");
  } while(number<10 || userIsHappy);
*/

/* С помощью for */
for (let userIsHappy = true, number = 0; number < 10;) {
    if(number == 5)  break; {
    userIsHappy = confirm ('Are you happy that the number is ' + ++number + "?");
}
}

