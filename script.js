/**
 * OMDb Api -> API za filmove i serije (pravicwmo bazu filmova)
 * Kada na google ukucamo 'free api' videcemo na gitHub-u 'public-apis/public-apis:
 * A collective list og free APIs' -> lista API-ja sa besplatnim pristupom za pravljenje nekih projekata itd..
 *
 * Skinuti 'Postman' -> program preko koga mozemo pozivati API-je (skinuo sam ga ranije)
 * Razlog -> jer cemo preko postmena videti odgovor API-ja i ne moramo sve preko koda (radi brzeg razvoja)
 *
 * Najvaznija stvar u radu sa API-jima je dokumentacija
 * Parametri -> su nacin kako mi mozemo da filtriramo filmove, serije i slicno
 * -> na osnovu parametara mozemo traziti odredjeni film ili seriju                                       -------------
 *Na OMDb Api mozemo samo preko 'id' filma da trazimo ostale filmove ili serije preko Postman-a
 *
 * Na stranici OMDb Api gde smo kliknuli na dugme 'Api Key' dobili smo polje za unos email adrese.
 * Posle zahteva za API key koji smo dobili preko email adrese krecemo sa kodom:
 */

// konstanta zato sto je ovo vrednost koja se nece menjati - koristicemo je 1000 puta
const apiUrl = 'http://www.omdbapi.com/';
let apiKey = '5611db9b';

// let response = callOMDbApi('t=Ghost Busters');
// console.log(response); // ovde vraca undefined - ZASTO ?  // Sada posle promena vraca Promise {<pending>}

// Ovaj poziv iznad ↑ se radi sinhrono - mi smo mu rekli pozovi funkciju callOMDbApi i odmah nam consol.log-uj odgovor koji si dobio
// ali ova funkcija se izvrsava asinhrono - posle poziva fetch moze vratiti odgovor za par minuta, a console.log ispisuje odmah
// moze se desiti da odgovor ne dobijemo odmah
// Zato cemo funkciju ispod ↓ prevesti u asinhroni oblik, tako sto cemo dodati ispred imena funkcije prefix 'async'
// sada dobijamo 'promise' u konzoli umesto 'undefined' - promise je nacin da nama asinhrona funkcija obeca da cemo dobiti odgovor
// ali nije dovoljno samo to uraditi, treba restruktuirati kod ispod ove funkcije ↓

// async function callOMDbApi(params) {
//     fetch(apiUrl+'?apiKey='+apiKey+'&'+params)
//         .then(response => response.json())
//         .then(function (data) {
//             return data; // JSON odgovor postoji (u inspektoru u kartici network)
//         })
// }


// ovaj kod je bolji , ali jos uvek ne radi kako treba jer se await ne moze koristiti van funkcija vec unutar funkcija
async function callOMDbApi(params) {
    const url = apiUrl+'?apiKey='+apiKey+'&'+params; // ova linija koda se poziva sinhrono - nema potrebe asinhrono

    const response = await fetch(url); // await -> pozovi API i (asinhrono) cekamo odgovor da bi nastavio izvrsavanje koda
    const result = await response.json(); // ova linija koda se izvrsava kada se dobije odgovor na liniji iznad

    return result;
    // return await response.json(); // moze i ovako bez kreiranja varijable 'result'
}

/**
 * Ovde dolazi do konfuznosti JS, jer se await ne moze koristiti izvan funkcije nego unutar funkcije.
 * Imaju dva nacina kako se to moze raditi.
 * Prvi nacin -> kreira se wrapper funkcija koja ce pozvati funkciju callOMDbApi
 * Sta se ovde desava? Problem je sto await ne mozemo koristiti spolja 'await getMovieByTitle('Terminator');'
 * Koristi se na vrhu modula (ovo nisam shvatio) ili unutar funkcija, zbog toga imamo jedan dodatni sloj
 * koji ce obmotati glavnu funkciju 'callOMDbApi' i wrapper funkciju koja je obmotava i ovo izaziva konfuziju
 * jer moramo napraviti sloj da bismo dosli do asinhronog odgovora. Primer ispod ↓
 */

// getMovieByTitle('Terminator');
//
// async function getMovieByTitle(title) {
//     let response = await callOMDbApi('t='+title);
//     console.log(response);
// }

/**
 * Drugi nacin -> 1. unesemo 'module' u index.html unutar script taga: <script type="module" src="script.js"></script>
 * Savet je da se radi sa ovim modernijim nacinom preko 'module'.
 */

let terminatorResponse = await callOMDbApi('t=Terminator');
console.log(terminatorResponse);

let homeAloneSearch = await callOMDbApi('s=Home Alone&y=1990');
console.log(homeAloneSearch);

/**
 * Domaci 18.18
 */

document.getElementById('searchButton').addEventListener('click', async () => { // ovde unosimo async da bi funkcija bila asinhrona
    let searchFilm = document.getElementById('searchFilm').value.trim();
    let searchError = document.getElementById('searchError');

    searchError.innerText = '';

    if (searchFilm === '') return alert('Please enter a valid search');

    let searchResults = await callOMDbApi('s='+searchFilm);

    if (searchResults.Response === 'False') {
        searchError.innerText = searchResults.Error;
    } else {
        let movieList = document.getElementById('movieList');

        for (let movie of searchResults['Search']) {

            let movieHolder = document.createElement('div');
            movieHolder.classList.add('movieHolder');

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

    }



})




