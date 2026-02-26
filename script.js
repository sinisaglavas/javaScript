/**
 * Stari nacin - koji treba znati:
 * getElementById -> prosledite ID dobijete element
 * getElementByClassName -> prosledite klasu i dobijete array sa elementom
 *                       -> uvek vraca array (kolekciju) i u slucaju postojanja samo jednog HTML elementa koji je vratio
 */

/**
 * Novi nacin - najvise se koristi i fokus je na njima:
 * querySelector -> "#name", ".name" -> vraca 1 element
 * querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */

document.querySelector('#title').style.color = 'blue';
document.querySelector('.subtitle').style.color = 'red'; // ovo je sadasnji standard
document.getElementsByClassName('subtitle2')[0].style.color = 'yellow';

/**
 * Pomocu querySelectorAll selektovati i obojiti sve paragrafe koji imaju klasu 'product'
 */

let products = document.querySelectorAll('.product');

// u ovoj petlji se javlja greska jer querySelectorAll
// dodaje element (koji objasnjava strukturu) u array koji nama ne treba
// kada kaze da je greska na liniji 29 uvek je greska na toj ili prethodnoj liniji

// for (let product in products) {
//     console.log(products[product]);
//     products[product].style.color = 'lightgreen';
// }

// ovaj nacin ne vraca gresku i preporuka je da se koristi - ne vraca index nego ceo div
for (let product of products) {
    product.style.color = '#2b2828';
}

/**
 * Promeniti da postojeca petlja menja boju u tamno sivo
 *  -> Ako je cena proizvoda 5000 ili vise, obojiti cenu u crveno
 *  -> Ako je cena manja od 5000 obojiti u zeleno
 */

let productPrices = document.querySelectorAll('.productPrice');

for (let productPrice of productPrices) {

    // textContent-kada uzimamo text unutar paragrafa
    // value-kada uzimamo text iz tagova: input, textarea, select
    if (productPrice.textContent >= 5000) {
        productPrice.style.color = 'red';
    }
    else {
        productPrice.style.color = 'green';
    }

}