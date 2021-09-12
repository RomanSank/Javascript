"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDM = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Один из поледних простотренных фильмов?', '');
const b = prompt('На сколькл оцените его?', '');
const c = prompt('Один из поледних простотренных фильмов?', '');
const d = prompt('На сколькл оцените его?', ''); */

/* personalMovieDM.movies[a] = b;
personalMovieDM.movies[c] = d;
 */
                    /* 1 вариант */
/* for (let i = 0; i < 2; i++) {
    const a = prompt('Один из поледних простотренных фильмов?', ''),
          b = prompt('На сколькл оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDM.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
} */


                    /* 2 вариант */
/* let i = 0;

do {
    const a = prompt('Один из поледних простотренных фильмов?', ''),
          b = prompt('На сколькл оцените его?', '');    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDM.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
    }
}
while (i < 2); */


                    /* 3 вариант */

let i = 0;
while (i < 2) {
    const a = prompt('Один из поледних простотренных фильмов?', ''),
          b = prompt('На сколькл оцените его?', '');    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDM.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
    }
}

if (personalMovieDM.count < 10) {
    console.log ('Просмотрено мало фильмов');
} else if (personalMovieDM.count >= 10 && personalMovieDM.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDM.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

/* console.log(a);
console.log(b); */

console.log(personalMovieDM);