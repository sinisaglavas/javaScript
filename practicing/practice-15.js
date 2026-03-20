/**
 * Vezbe
 * 1. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman
 * Napravi fetch GET za filmove sa naslovom "batman" i prikaži imena filmova u <ul>.
 */

// https://www.omdbapi.com/?i=tt3896198&apikey=5611db9b
const apiKey = '5611db9b';

let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s=batman');
let result = await response.json();

let ulElement = document.createElement('ul');

for (let batmenMovie of result.Search) {
    let liElement = document.createElement('li');
    liElement.innerText = batmenMovie.Title;

    ulElement.append(liElement);
}

console.log(ulElement);


/**
 * 2. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=Inception
 * Napravi fetch GET za "Inception" i prikaži "Title: X, Year: Y, Director:
 * Z" u <div>.
 */

let response1 = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&t=Inception');
let result1 = await response1.json();

let divElement = document.createElement('div');
let title = document.createElement('h5');
let yearProduced = document.createElement('p');
let director = document.createElement('p');

title.innerText = result1.Title;
yearProduced.innerText = result1.Year;
director.innerText = result1.Director;

divElement.append(title, yearProduced, director);

console.log(divElement);


/**
 * 3. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=avengers
 * Napravi loop koji prikazuje sve filmove i njihove godine u <ul>.
 */

let response2 = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s=avengers');
let result2 = await response2.json();

let ulElement1 = document.createElement('ul');

for (let allMovies of result2.Search) {
    let liElement = document.createElement('li');
    liElement.innerText = allMovies.Title + ', Year:' + allMovies.Year;

    ulElement1.append(liElement);
}

console.log(ulElement1);

/**
 * 4. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=Matrix
 * Napravi funkciju prikaziFilm(title) koja fetch-uje film po naslovu i dodaje <p> sa
 * detaljima u DOM.
 */

async function prikaziFilm(title) {
    let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&t='+title);
    let result = await response.json();

    let matrixMovie = document.getElementById('matrixMovie');

    let pElement = document.createElement('p');
    pElement.innerText = result.Title + ', Type:' + result.Type + ', Year:' + result.Year;

    matrixMovie.appendChild(pElement);
}

prikaziFilm('Matrix');

/**
 * 5. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=star+wars
 * Napravi dropdown (<select>) sa imenima filmova; promenom selekcije prikazuj
 * detalje filma u <div>.
 */

let response3 = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s=star+wars');
let result3 = await response3.json();

let detailsMovie = document.getElementById('detailsMovie');
let selectMovie = document.getElementById('selectMovie');

for (let movieName of result3.Search) {
    let optionElement = document.createElement('option');
    optionElement.innerText = movieName.Title;
    optionElement.value = movieName.imdbID;

    selectMovie.append(optionElement);
}

detailsMovie.append(selectMovie);

selectMovie.addEventListener('change', async function () {

    let imdbID = this.value; // value unutar option elementa

    let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&i='+imdbID);
    let movieDetails = await response.json();
    console.log(movieDetails);

    detailsMovie.innerHTML = '';

    let h5Element = document.createElement('h5');
    h5Element.innerText = movieDetails.Title;

    let pElement = document.createElement('p');
    pElement.innerText = movieDetails.Year;

    detailsMovie.append(selectMovie, h5Element, pElement);
});

/**
 * 6. API GET: http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=spider-man
 * Napravi <button> koji fetch-uje filmove i prikazuje samo one sa Year > 2010.
 */

let chooseMovie = document.getElementById('chooseMovie');
let chooseMovieBtn = document.getElementById('chooseMovieBtn');

chooseMovieBtn.addEventListener('click', async () => {
    let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s=spider-man');
    let result = await response.json();

    for (let movie of result.Search) {
        if (movie.Year > 2010) {
            let movieData = document.createElement('p');
            movieData.innerText = movie.Title + ', Year:' + movie.Year + ', Type:' + movie.Type;

            chooseMovie.appendChild(movieData);
        }
    }
});


/**
 * 7. API GET:
 * http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=harry+potter
 * Napravi funkciju koja vraća niz naslova filmova i prikazuje ih u <ul>.
 */

async function getMovies(title) {
    let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s='+title);
    let result = await response.json();

    let ulElement = document.createElement('ul');

    for (let movies of result.Search) {
        let liElement = document.createElement('li');
        liElement.innerText = movies.Title;

        ulElement.append(liElement);
    }

    console.log(ulElement);
}

getMovies('harry+potter');

/**
 * 8. API GET + POST:
 * Napravi GET za "batman" i POST na
 * https://jsonplaceholder.typicode.com/posts sa {title: nazivFilma, year: godina}; ispiši id odgovora.
 */

let response4 = await fetch('http://www.omdbapi.com/?apikey=' + apiKey + '&s=batman');
let data = await response4.json();

for (let movie of data.Search) {

    let title = movie.Title;
    let year = movie.Year;

    let postResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            year: year
        })
    });

    let result = await postResponse.json();

    console.log('ID odgovora:', result.id);
}

/**
 * 9. API GET + POST:
 * Napravi <form> za pretragu filma; GET fetch prikazuje detalje, a <button> šalje
 * POST na JSONPlaceholder sa {title, year}.
 */

let form = document.getElementById('movieForm');
let input = document.getElementById('movieInput');
let movieDetails = document.getElementById('movieDetails');
let sendPost = document.getElementById('sendPost');

let currentMovie = null;

form.addEventListener('submit', async function(event) {

    event.preventDefault();

    let movieName = input.value;

    let response = await fetch('http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + movieName);

    let movie = await response.json();

    currentMovie = movie;

    movieDetails.innerHTML = `<h3>${movie.Title}</h3> <p>Year: ${movie.Year}</p>`;
});

sendPost.addEventListener('click', async function() {

    if (!currentMovie) return;

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: currentMovie.Title,
            year: currentMovie.Year
        })
    });

    let result = await response.json();

    console.log('POST id:', result.id);
});

/**
 * 10. API GET:
 * Napravi funkciju koja fetch-uje film po naslovu i vraća true ako je IMDb rating > 8,
 * false inače.
 */

async function isIMDbRating(title) {
    let response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&t='+title);
    let result = await response.json();

    result.imdbRating > 8 ? console.log('true') : console.log('false');
}

isIMDbRating('harry+potter');