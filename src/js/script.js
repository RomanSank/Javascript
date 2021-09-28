"use strict";

const personalMovieDM = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDM.count == '' || personalMovieDM.count == null || isNaN(personalMovieDM.count)) {
            personalMovieDM.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из поледних простотренных фильмов?', ''),
                      b = prompt('На сколькл оцените его?', '');
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDM.movies[a] = b;
                    console.log('done');
                } else {
                    console.log('error');
                    i--;
                }    
            }
        },
    detectPersonaLevel: function() {
        if (personalMovieDM.count < 10) {
            console.log ('Просмотрено мало фильмов');
        } else if (personalMovieDM.count >= 10 && personalMovieDM.count < 30) {
            console.log ('Вы классический зритель');
        } else if (personalMovieDM.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showDB: function() {
        if (personalMovieDM.privat == false) {        
            console.log(personalMovieDM);
        }
    },
    writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {   
                personalMovieDM.genres[i-1] = prompt(`Ваш лююибый жанр по помером ${i}`, ''); 
                if (personalMovieDM.genres[i-1] == '' || personalMovieDM.genres[i-1] == null) {
                   console.log('Error');
                   i--;                 
                }
            }
            personalMovieDM.genres.forEach((item, element) => console.log(`Любимый жанр ${element + 1} - это ${item}`));   
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDM.privat) {
            personalMovieDM.privat = false;
        } else {
            personalMovieDM.privat = true;
        }
    },
};
personalMovieDM.start();
personalMovieDM.rememberMyFilms();
personalMovieDM.detectPersonaLevel();
personalMovieDM.showDB();
personalMovieDM.writeYourGenres();
personalMovieDM.toggleVisibleMyDB();

/* console.log(personalMovieDM); */



/* const a = prompt('Один из поледних простотренных фильмов?', '');
const b = prompt('На сколькл оцените его?', '');
const c = prompt('Один из поледних простотренных фильмов?', '');
const d = prompt('На сколькл оцените его?', ''); 
personalMovieDM.movies[a] = b;
personalMovieDM.movies[c] = d; */

                    /* 1 вариант */




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

/* let i = 0;
while (i < 2) {
    const a = prompt('Один из поледних простотренных фильмов?', ''),
          b = prompt('На сколькл оцените его?', '');    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDM.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
    }11
} */


/* console.log(a);
console.log(b);*/

/* console.log(personalMovieDM); */