'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmFirstRating = prompt('На сколько оцените его?', ''),
    lastFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmSecondRating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilmFirst] = lastFilmFirstRating;
personalMovieDB.movies[lastFilmSecond] = lastFilmSecondRating;

console.log(personalMovieDB);
