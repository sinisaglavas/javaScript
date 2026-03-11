/**
 * Vežbe
 * 1. Napravi <div id="main"></div> i pomoću createElement dodaj <p> sa tekstom
 * "Dobrodošao!" i font veličinom 18px.
 */

let mainElement = document.getElementById('main');

let pElement = document.createElement('p');
pElement.innerText = 'Dobrodosao';
pElement.style.fontSize = '18px';

mainElement.appendChild(pElement);


/**
 * 2. Napravi niz imena = ["Petar","Luka","Maja"] i dodaj <p> samo za imena koja
 * sadrže "a".
 */

let names = ['Petar', 'Luka', 'Maja', 'Milos'];
let divElement = document.createElement('div');
let paragraphElement;

 for (name of names) {

     if (name.toLowerCase().includes('a')) {
         paragraphElement = document.createElement('p');
         paragraphElement.innerText = name;
     }
     divElement.append(paragraphElement);
 }
console.log(divElement);

/**
 * 3. Napravi varijablu score = 88 i prikaži "Pass" ili "Fail" u <p> pomoću ternarnog
 * operatora.
 */

let score = 88;
let result = score >= 70 ? 'Pass' : 'Fail';

let pElem = document.createElement('p');
pElem.innerText = result;

console.log(pElem);

/**
 * 4. Napravi niz brojevi = [3,6,9,12,15] i dodaj <li> sa tekstom "Broj X je
 * deljiv sa 3" samo za deljive brojeve.
 */

let numbers = [3, 6, 9, 12, 15, 16];
let ulElement = document.createElement('ul');

for (number of numbers) {
    let liElement = document.createElement('li');
    if (number % 3 === 0) {
        liElement.innerText = 'Broj '+number+' je deljiv sa 3';
        ulElement.append(liElement);
    }
}
console.log(ulElement);

/**
 * 5. Napravi <div class="container"></div> i pomoću loop-a dodaj <span> sa
 * tekstom "Element X" i na svaku iteraciju promeni boju teksta.
 */

let containerElement = document.querySelector('.container');

for (let i = 1; i < 6; i++) {
    let spanElement = document.createElement('span');
    spanElement.innerText = 'Element '+i;
    spanElement.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    containerElement.append(spanElement);
}

/**
 * 6. Napravi niz proizvodi = ["Mleko","Hleb","Sir"] i dodaj <li> sa "Na
 * lageru: X" za svaki proizvod.
 */

let products = ['Mleko', 'Hleb', 'Sir'];

let ulElem = document.createElement('ul');

for (product of products) {
    let liElement = document.createElement('li');
    liElement.innerText = 'Na lageru: '+product;
    ulElem.append(liElement);
}
console.log(ulElem);

/**
 * 7. Napravi <h1 id="naslov"></h1> i pomoću if proveri dužinu stringa "Hello
 * World"; ako je veća od 5, prikaži "Dug naslov", inače "Kratak naslov".
 */

let titleElement = document.getElementById('naslov');
titleElement.innerText = 'Hello World';

if (titleElement.textContent.length > 5) {
    console.log('Dug naslov');
} else {
    console.log('Kratak naslov');
}

/**
 * 8. Napravi niz ocene = [1,3,5,2,4] i pomoću loop-a izračunaj prosečnu ocenu i
 * prikaži u <p id="prosek"></p>.
 */

let grades = [1, 3, 5, 2, 4, 9];
let sumGrade = 0;
let averageGrade = 0;
for (let grade of grades) {
    sumGrade += grade;
}
averageGrade = sumGrade / grades.length;

let paragraphElem = document.createElement('p');
paragraphElem.innerText = averageGrade;
paragraphElem.id = 'prosek';

console.log(paragraphElem);

/**
 * 9. Napravi <ul id="listaGradova"></ul> i dodaj <li> sa "Grad: X" za svaki grad
 * u nizu, ali preskoči grad "Niš".
 */

let cities = ['Beograd', 'Novi Sad', 'Nis'];

let cityListElement = document.getElementById('listaGradova');
let liElement;

for (let city of cities) {
    if (city !== 'Nis') {
        liElement = document.createElement('li');
        liElement.innerText = city;
    }
    cityListElement.append(liElement);
}

/**
 * 10. Napravi <div id="boxes"></div> i pomoću loop-a dodaj 4 <div> sa klasom "box"
 * i različitim pozadinskim bojama.
 */

let divElem = document.getElementById('boxes');
let divBox;

for (let i = 0; i < 4; i++) {
    divBox = document.createElement('div');
    divBox.classList.add('box');
    divBox.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    divBox.style.width = '20px';
    divBox.style.height = '20px';

    divElem.append(divBox);
}