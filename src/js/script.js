const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDM = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из поледних простотренных фильмов?', '');
const scoreLastFilm = prompt('На сколькл оцените его?', '');

personalMovieDM.movies[lastFilm] = scoreLastFilm;

console.log(lastFilm);
console.log(scoreLastFilm);

console.log(personalMovieDM);