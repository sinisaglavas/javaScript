/**
 * Vežbe
 * 1. Napravi funkciju saberi(a, b) koja vraća zbir dva broja.
 */

function saberi(a, b) {
    let zbir  = a + b;
    console.log(zbir);
}

saberi(10, 90);

/**
 * 2. Napravi funkciju umnozi(a, b) koja vraća proizvod dva broja.
 */

function umnozi(a, b)  {
    let rezultat = a * b;
    console.log(rezultat);
}

umnozi(5, 10);

/**
 * 3. Napravi funkciju prosek(niz) koja vraća prosečnu vrednost niza brojeva.
 */

function prosek(niz) {
    let ukupnaVrednost = 0;
    for (let broj of niz) {
        ukupnaVrednost += broj;
    }

    let prosecnaVrednost = ukupnaVrednost / niz.length;

    console.log(prosecnaVrednost);
}

let array = [4, 6, 8, 10, 15];

prosek(array);

/**
 * 4. Napravi funkciju maks(niz) koja vraća najveći broj iz niza.
 */

function maks(niz) {
    let najveciBroj = 0;

    for (let broj of niz) {
        if (broj > najveciBroj) {
            najveciBroj = broj;
        }
    }
    console.log('Najveci broj je: '+najveciBroj);
}

let numbers = [2, 3, 20, 4, 5, 15];

maks(numbers);

/**
 * 5. Napravi funkciju min(niz) koja vraća najmanji broj iz niza.
 */

function min(niz) {
    let najmanjiBroj = Math.min(...niz);

    console.log('Najmanji broj je: '+najmanjiBroj);
}

let numero = [2, 3, 20, 4, 5, 15];

min(numero);

/**
 * 6. Napravi funkciju duzinaStringa(str) koja vraća broj karaktera u stringu.
 */

function duzinaStringa(str) {
    let brojKaraktera = str.length;

    console.log(brojKaraktera);
}

duzinaStringa('Mostar je divan grad');

/**
 * 7. Napravi funkciju parnost(broj) koja vraća "paran" ili "neparan" u zavisnosti od
 * broja.
 */

function parnost(broj) {
    if (broj % 2 === 0) {
        console.log('Paran broj');
    } else {
        console.log('Neparan broj');
    }
}

parnost(19);

/**
 * 8. Napravi funkciju pozdrav(ime) koja vraća "Zdravo, Ime!".
 */

function pozdrav(ime) {
    console.log('Zdravo '+ime);
}

pozdrav('Sinisa');

/**
 * 9. Napravi funkciju kvadrat(broj) koja vraća kvadrat broja.
 */

function kvadrat(broj) {
    console.log(broj ** 2);
}

kvadrat(5);

/**
 * 10. Napravi funkciju obrniString(str) koja vraća string unazad.
 */

function obrniString(str) {
    console.log(str.split('').reverse().join(''));
}

obrniString('Hello');
