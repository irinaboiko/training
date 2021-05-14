'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++ ) {
            const lastFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
                lastFilmFirstRating = prompt('На сколько оцените его?', '');
        
            if (lastFilmFirst != null && lastFilmFirstRating != null && lastFilmFirst != '' && lastFilmFirstRating != '' && lastFilmFirst.length < 50) {
                personalMovieDB.movies[lastFilmFirst] = lastFilmFirstRating;
            } else {
                i--;
            }
        } 
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach( (genre, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${genre}`);
        });

    },
    toggleVisibleMyDB: () => {
        personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
    },
    showMyDB: hidden => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};
