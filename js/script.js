"use strict" // Говорим скрипту, то что  мы работаем в современном режиме 

console.log('arr' + ' - object');
console.log(4 * +'25');

//инкремент и декремент это укорочение кода 

let incr = 10,
    decr = 10;
// ++incr;//постфиксная записть
// --decr;//постфиксная записть

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 == 8);// Сравнение пишется через ==

// оператор И &&
// Оператор ИЛИ ||

const isChekced = true,
      isClose = false;
console.log(isChekced || isClose);