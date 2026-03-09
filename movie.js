
// query parametar je sve sto se nalazi posle upitnika

// const url = "http://localhost:63342/19.cas-Project/movie.html?id=tt5904326";
// const deo = url.split('?')[1];
// console.log(deo); // "id=tt5904326"

// const url = new URL("http://localhost:63342/19.cas-Project/movie.html?id=tt5904326");
// const deo = url.search.substring(1);
// console.log(deo); // "id=tt5904326"

// let imbdId = window.location.href;
// console.log(imbdId);

const params = new URLSearchParams(window.location.search); // iz stringa uzima query parametre '?id=tt5904326'
const id = params.get('id'); // "tt5904326"

const apiUrl = 'http://www.omdbapi.com/?apiKey=5611db9b&i='+id;

const response = await fetch(apiUrl);

const result = await response.json();

const movieHolder = document.getElementById('movieHolder');

const title = document.createElement('h3');
title.innerText = result.Title;

movieHolder.append(title);

const trailerApiUrl = 'https://imdb.iamidiotareyoutoo.com/media/'+id;

const trailer = document.getElementById('trailer');
trailer.setAttribute('source', trailerApiUrl);


console.log(trailerApiUrl);