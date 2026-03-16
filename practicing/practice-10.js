/**
 * Vežbe – Funkcije
 * 1. Napravi funkciju pozdravi() koja ispisuje "Zdravo!" u konzolu i pozovi je.
 */

function pozdravi(){
    console.log('Zdravo');
}
pozdravi();

/**
 * 2. Napravi funkciju pozdraviIme(ime) koja ispisuje "Zdravo, Ime!" u konzolu, gde
 * ime dolazi iz parametra.
 */

function pozdraviIme(ime) {
    console.log('Zdravo '+ime);
}
pozdraviIme('Sinisa');

/**
 * 3. Napravi funkciju ispisiBroj(broj) koja ispisuje "Broj je X" u konzolu.
 */

function ispisiBroj(broj) {
    console.log('Broj je '+broj);
}
ispisiBroj(77);

/**
 * 4. Napravi funkciju ispisiNiz(niz) koja koristi for loop i ispisuje sve elemente niza u
 * konzolu.
 */

function ispisiNiz(niz) {
    for (let element of niz) {
        console.log(element);
    }
}
let array = [1, 2, 3, 4, 5];
ispisiNiz(array);

/**
 * 5. Napravi funkciju ispisiParne(niz) koja koristi for + if i ispisuje samo parne
 * brojeve iz niza.
 */

function ispisiParne(niz) {
    for (let element of niz) {
        if (element % 2 === 0) {
            console.log(element);
        }
    }
}
let niz = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
ispisiParne(niz);

/**
 * 6. Napravi funkciju dodajParagraf(tekst) koja kreira <p> sa prosleđenim tekstom i
 * dodaje ga u <div id="container"></div>.
 */

let container = document.getElementById('container');

function dodajParagraf(tekst) {
    let paragraf = document.createElement('p');
    paragraf.innerHTML = tekst;

    container.appendChild(paragraf);
}
dodajParagraf('Uspeh');

/**
 * 7. Napravi funkciju promeniBoju(boxId, boja) koja menja backgroundColor diva
 * sa datim id-em.
 */

function promeniBoju(boxId, boja) {
    let elementId = document.getElementById(boxId);
    elementId.style.backgroundColor = boja;
}

promeniBoju('backgroundColor', 'red');

/**
 * 8. Napravi funkciju ispisiPozdravImeGodine(ime, godine) koja ispisuje "Zdravo,
 * ime! Imaš X godina".
 */

function ispisiPozdravImeGodine(ime, godine) {
    console.log('Zdravo '+ime+'! Imas '+godine+' godina');
}

ispisiPozdravImeGodine('Marko', 100);

/**
 * 9. Napravi funkciju ispisiListe(niz) koja kreira <ul> i dodaje <li> za svaki element
 * niza.
 */

function ispisiListe(niz) {
    let ulElement = document.createElement('ul');
    for (let element of niz) {
        let liElement = document.createElement('li');
        liElement.innerText = element;

        ulElement.append(liElement);
    }
    console.log(ulElement);
}

let imena = ['Ana', 'Marko', 'Sofija', 'Larisa'];

ispisiListe(imena);

/**
 * 10. Napravi funkciju dodajNaslov(tekst) koja kreira <h2> sa prosleđenim tekstom i
 * dodaje ga u <div id="container"></div>.
 */

function dodajNaslov(tekst) {
    let container = document.createElement('div');

    let h2Element = document.createElement('h2');
    h2Element.innerText = tekst;

    container.appendChild(h2Element);
    console.log(container);
}

dodajNaslov('Postavljanje ciljeva je prvi korak u pretvaranju nevidljivog u vidljivo.');
