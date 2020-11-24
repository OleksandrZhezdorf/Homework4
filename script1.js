/* пример while с итерацией и прерыванием цикла*/
let userIsHappy = true;
let number = 0;
while(number < 10 || userIsHappy) {
  if(number == 5) {
     break;
  }
  userIsHappy = confirm ('Are you happy that the number is ' + ++number + "?");
}


/* пример do с итерацией и прерыванием цикла*/
let userIsHappy2 = true;
let number2 = 0;
do {
    if(number2 == 6) {
       break;
    }
    userIsHappy2 = confirm ('Are you happy that the number is ' + ++number2 + "?");
  } while(number2<10 || userIsHappy2);


/* С помощью for */
for (let userIsHappy3 = true, number3 = 0; number3 < 10;) {
    if(number3 == 7)  break; {
    userIsHappy3 = confirm ('Are you happy that the number is ' + ++number3 + "?");
}
}

