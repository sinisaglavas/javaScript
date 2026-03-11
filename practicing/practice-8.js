/**
 * Vežbe – Kombinovane (20 vežbi)
 */
/**
 * 1. Napravi <div id="glavni"></div> i pomoću createElement dodaj <p> sa
 * tekstom "Zdravo" i stilom crvene boje.
 */

let mainElement = document.querySelector('#glavni');
let paragraph = document.createElement('p');

paragraph.innerText = 'Hello!';
paragraph.style.color = 'red';
mainElement.appendChild(paragraph);

/**
 * 2. Napravi niz imena = ["Ana","Marko","Jovan"]. Napravi <ul
 * id="lista"></ul> i pomoću for loop-a dodaj svaki element niza kao <li> u listu.
 */

let names = ['Ana', 'Marko', 'Jovan'];

let ulElement = document.querySelector('.list');

for (let i = 0; i < names.length; i++) {
    let liElement = document.createElement('li');
    liElement.innerText = names[i];

    ulElement.append(liElement);
}

/**
 * 3. Napravi varijablu broj = 15. Napravi <p id="par"></p> i pomoću if upiši "Broj
 * je veći od 10" ili "Broj je manji ili jednak 10".
 */

let number = 15;
let parElement = document.querySelector('#par');

if (number > 10) {
    parElement.innerText = 'Broj je veci od 10';
} else if (number <= 10) {
    parElement.innerText = 'Broj je manji ili jednak 10';
}

/**
 * 4. Napravi niz ocene = [5,3,4,2,5] i pomoću for loop-a saberi sve ocene, zatim
 * prikaži zbir u <p id="zbir"></p>.
 */

let grades = [5, 3, 4, 2, 5];
let sum = document.querySelector('#zbir');
let total = 0;

for (let i = 0; i < grades.length; i++) {
    total += grades[i];
}
sum.innerText = total;

/**
 * 5. Napravi <div id="box"></div> i pomoću createElement dodaj <h2> sa
 * "Naslov" i <p> sa "Opis".
 */

let boxElement = document.getElementById('box');

let title = document.createElement('h2');
title.innerText = 'Naslov';

let describe = document.createElement('p');
describe.innerText = 'Opis';

boxElement.append(title, describe);

/**
 * 6. Napravi niz gradovi = ["Beograd","Novi Sad","Niš"] i pomoću for + if
 * dodaj u <ul id="gradovi"></ul> samo gradove koji počinju slovom "N".
 */

let cities = ['Beograd', 'Novi Sad', 'Nis'];
let cityElement = document.getElementById('gradovi');

for (city of cities) {
    if (city[0].toLowerCase() === 'n') {
        let liElement = document.createElement('li');
        liElement.innerText = city;
        cityElement.append(liElement);
    }
}

/**
 * 7. Napravi <div class="card"></div> i pomoću createElement dodaj <h3> sa
 * "Kartica" i <p> sa "Opis kartice".
 */

let cardElement = document.querySelector('.card');

let h3Element = document.createElement('h3');
h3Element.innerText = 'Kartica';

let pElement = document.createElement('p');
pElement.innerText = 'Opis kartice';

cardElement.append(h3Element, pElement);

/**
 * 8. Napravi varijablu poeni = 72. Napravi <p id="rezultat"></p> i pomoću
 * if/else if/else napiši "Odličan", "Dobar" ili "Nedovoljan".
 */

let points = 72;
let score = document.querySelector('#rezultat');

if (points >= 50) {
    score.innerHTML = 'Odlican';
} else if (points >= 25 && points < 50) {
    score.innerHTML = 'Dobar';
} else if (points >= 0 && points < 25) {
    score.innerHTML = 'Nedovoljan';
} else {
    score.innerHTML = 'Igrajte ponovo';
}

/**
 * 9. Napravi niz brojevi = [2,4,6,8,10] i pomoću for loop-a dodaj <li> u <ul
 * id="listaBrojeva"></ul> sa kvadratom svakog broja.
 */

let numbers = [2, 4, 6, 8, 10];
let listNumber = document.querySelector('#listaBrojeva');

for (number of numbers) {
    let liElement = document.createElement('li');
    liElement.innerText = number ** 2;
    listNumber.append(liElement);
}

/**
 * 10. Napravi <div id="container"></div> i pomoću createElement dodaj 5 <p>
 * elemenata sa tekstom "Paragraf X", gde je X broj 1–5.
 */

let containerElement = document.querySelector('#container');

for (let i= 1; i < 6; i++) {
    let pElement = document.createElement('p');
    pElement.innerText = 'Paragraf '+i;
    containerElement.append(pElement);
}