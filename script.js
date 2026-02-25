// CTRL + SHIFT + R = CACHE refresh - sigurnije od obicnog osvezavanja
// CTRL + ALT + L = Sredjivanje koda u smislu logicnijeg polozaja elemenata
// CTRL + D = kopira istu liniju koda (kursor na zeljenu liniju)

let products = ['hleb', 'mleko', 'jogurt'];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// loop - forIn (for arrays)
for (let product in products) {
    console.log(products[product]);
}

let cart = [
    {
        name: 'Hleb',
        price: 100,
        amount: 1,
    },
    {
        name: 'Mleko',
        price: 250,
        amount: 2,
    },
    {
        name: 'Jogurt',
        price: 300,
        amount: 3,
    },
];

/**
 * Kako da ispisem koliko kosta prvi proizvod? 'Hleb' -> console.log()
 *  -> Gde su mi podaci? cart
 *  -> Kako da izvucem prvi podatak iz niza? cart[0] -> console.log()
 *      -> Sta sam dobio iz korpa[0], koju vrstu podatka?
 *          -> objekat
 *              -> Sta taj objekat sadrzi? {name: 'Hleb', price:100, amount:1} -> console.log()
 *                  -> Sta meni treba iz tog objekta? price -> console.log()
 */

console.log(cart[0]['name'] + '---');

// Ispisati cene svih proizvoda pomocu petlje

for (let aboutItem in cart) {
    console.log(cart[aboutItem]['price']);
}
console.log('---');

/**
 *  Ako je cena artikla veca od 200 din. zaustavi petlju
 */

for (let product in cart) {

    let productPrice = cart[product]['price'];

    if (productPrice > 200) {
        break;
    }
    console.log(productPrice);
}