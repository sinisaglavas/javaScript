/**
 * Ajax, Axios, Fetch, postReq, XHR... - nacini da pozovemo neki link ili api da dobijemo podatke
 * Neki su dodatne biblioteke: Axios
 * Uz jQuery dolazi: Ajax
 * Sve su to manje vise iste stvari samo se zovu drugacije
 *
 * NAJVAZNIJI DEO KOJI SE MORA RAZUMETI je rad sa API-jima
 * Cesto se komunicira sa nekim API-jima kako bismo dobili podatke sa druge lokacije
 *
 * Kada se nauci rad sa fetch-om znacemo da radimo sa svim ostalim stvarima
 *
 * Radicemo sa laznim API-jima kroz vezbu preko: DummyJSON
 */

/**
 * PROBLEM KOJI SE JAVLJA:
 * CORS
 * Cross Origin Resource Sharing
 * Pravilo koje nam ne dozvoljava da sa nepoznatog izvora pozivamo API
 * Mora biti poziv sa sigurnog sajta - svi API zahtevaju da dolazi poziv sa validiranog izvora
 * Zato ne mozemo da iz browser-a direktno da pozovemo neki server, jer browser nema podatke koji su njemu potrebni
 * I zato je resenje da se kod pokrece preko servera koji ima sve sertifikate potrebne za poziv ka API
 * Ako se radi preko visualStudio - skinuti bilo koji 'live server'
 *
 * https://nazivAdrese - protokol koji govori JS da zna da treba ucitati podatke sa neta, a ne sa racunara
 * Bez protokola pokusava da to otvori na nasem racunaru/serveru
 */

// fetch(dummyjson.com/test);

// fetch('https://dummyjson.com/test');

/**
 * Network tab nam je najbolji prijatelj kada radimo sa API, a i sa sva ostala ucitavanja ce biti ispisana u njemu:
 * svaka slika, svi js fajlovi, sav CSS se ucitava, apsolutno svaki podatak ce biti u njemu ucitan
 * Znaci ako nesto ne radi prvo otvaramo konzolu i ako tamo nema greske otvaramo network (mrezu) i tamo trazimo
 */

/**
 * NETWORK ima vise tabova koji se pojave posle klika na neki ucitan dogadjaj
 * 1. Headers -> informacije o tom pozivu: GET, POST, IP adresa, HOST (odakle pozivamo, itskola.net)
 * 2. Preview -> odgovor koji smo dobili u JSON ispisu
 * 3. Response -> slicno kao Preview: odgovor
 * 4. Initiator -> lanac kako je doslo do API-ja: koraci u smislu kako smo stigli sa mog sajta do poslednjeg koji smo trazili
 * 5. Timing -> Detaljan tajming koliko je svaki korak trajao vremenski
 * Reload stranice kada zelimo iznova da vidimo sta se ucitava i kojim redosledom
 */

/**
 * Pri API pozivu to radimo na drugaciji nacin, jer ovo nije klasicna funkcija. Ove stvari se odigravaju asinhrono -> Async
 * -> Idi na: dummyjson.com/test
 * -> Uzmi odgovor
 * -> Prikazi odgovor
 * Kada se uradi ovaj poziv on pravi nesto sto se zove Promise.
 * Promise -> garancija da cemo dobiti odgovor
 * Mi ne znamo sta ce biti i kada ce biti odgovor i da li dolazi do greske
 * Znaci mi smo pozvali neki API a kod neka nastavi da se izvrsava, a ja kad dobijem odgovor dobio sam ga
 * To je garancija da cemo u nekom trenutku dobiti odgovor
 * Pozovi: https://dummyjson.com/test
 * -> Promise: obecavam da ces dobiti odgovor
 * -> Kod nastkavlja da se izvrsava
 */

// fetch('https://dummyjson.com/test').then(function(response) { // then se izvrsava tek kada se dobije odgovor
//     console.log(1);
// })
// console.log(2);

/**
 * Async
 * -> Pozovi DummyJSON API:
 *      -> Obecavam da cu ti dati odgovor
 * -> Nastavlja kod
 */

// fetch('https://dummyjson.com/test')
//     .then(function(response) { // dobijamo odgovor od promise
//         if (response.ok) {
//             console.log('API je uspesno pozvan!');
//         }
//         return response.json(); // podaci se vracaju da bi se u sledecoj funkciji prikazali -> data
//     })
// .then(function(data) {
//     console.log(data);
// })


    // Vezba - API vraca 20 podataka, sortirano po ceni od najvise ka najnizoj

let products = document.getElementById('products');
let searchProduct = document.getElementById('searchProduct');

searchProduct.addEventListener('click', (event) => {

    let searchText = document.getElementById('searchText');
    let searchLink = 'https://dummyjson.com/products/search?q=' + searchText.value;

    fetch(searchLink)
        .then(response => response.json()) // novi standard za pisanje koda
        // .then(function (response) {
        //     return response.json();
        // })
    .then(function (data) {
        products.innerHTML = '';
        for (product of data.products) {

           appendProductToHolder(product)
        }
    })

})

// fetch('https://dummyjson.com/products?limit=20&sortBy=price&order=desc')
//     .then(function(response) { // dobijamo odgovor od promise
//         if (response.ok) {
//             console.log('API je uspesno pozvan!');
//         }
//         return response.json(); // podaci se vracaju da bi se u sledecoj funkciji prikazali -> data
//     })
//     .then(function(data) {
//         for (product of data.products) {
//            appendProductToHolder(product)
//         }
//     })

function appendProductToHolder(product) {
    let singleProduct = document.createElement('div');

    let productTitle = document.createElement('h4');
    productTitle.innerText = product.title;

    let productCategory = document.createElement('p');
    productCategory.innerText = product.category;

    let productPrice = document.createElement('p');
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productCategory, productPrice);

    products.appendChild(singleProduct);
}