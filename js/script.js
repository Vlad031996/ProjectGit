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

// Так мы создаём переменную 
const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели', '');
// Так мы создаём вторую объект 
const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Создаём по 2 раза пользователю вопрос ХЗ ЗАЧЕМ
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);