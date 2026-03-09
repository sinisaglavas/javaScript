
const apiUrl = 'http://www.omdbapi.com/';
let apiKey = '5611db9b';

async function callOMDbApi(params) {

    const url = apiUrl+'?apiKey='+apiKey+'&'+params;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}

document.getElementById('searchButton').addEventListener('click', async () => { // ovde unosimo async da bi funkcija bila asinhrona
    let searchFilm = document.getElementById('searchFilm').value.trim();
    let movieYear = document.getElementById('movieYear').value.trim();
    let videoType = document.getElementById('videoType').value;

    let searchError = document.getElementById('searchError');
    searchError.innerText = '';

    if (searchFilm === '') return alert('Please enter a valid search');

    let queryArgs = [
        's='+searchFilm,
        'type='+videoType,
    ];

    let searchResults = {}; // (kao prazan objekat) mora biti van if jer je 'let' unutar if nevidljiv izvan if statement-a

    if (movieYear !== '') {
        queryArgs.push('year='+movieYear);
    }

    searchResults = await callOMDbApi(queryArgs.join('&'));

    if (searchResults.Response === 'False') {
        searchError.innerText = searchResults.Error;
    } else {
        let movieList = document.getElementById('movieList');

        for (let movie of searchResults['Search']) {
            appendMovie(movieList, movie);
        }
    }
})

function appendMovie(movieList, movie){
    let movieHolder = document.createElement('a');
    movieHolder.classList.add('movieHolder');
    movieHolder.setAttribute('href', 'movie.html?id='+movie.imdbID);

    let movieTitle = document.createElement('h4');
    movieTitle.innerText = movie.Title;

    let moviePoster = document.createElement('img');
    moviePoster.setAttribute('src', movie.Poster);

    let movieType = document.createElement('p');
    movieType.innerText = movie.Type;

    let movieYear = document.createElement('p');
    movieYear.innerText = movie.Year;

    movieHolder.append(movieTitle, moviePoster, movieType, movieYear);

    movieList.append(movieHolder);
}