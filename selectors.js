/**
 * Stari nacin - koji treba znati:
 * getElementById -> prosledite ID dobijete element
 * getElementByClassName -> prosledite klasu i dobijete array sa elementom
 *                       -> uvek vraca array (kolekciju) i u slucaju postojanja samo jednog HTML elementa koji je vratio
 */

let elements = document.getElementsByClassName('description');
elements[0].style.color = 'red';
elements[1].style.color = 'blue';

for (let number in elements) {
    elements[number].innerText = number;
}

let hTitle = document.getElementsByClassName('title');
hTitle[0].style.color = 'green';

// Koliko elemenata imamo sa klasom 'description'?

console.log(elements.length);



/**
 * Novi nacin - najvise se koristi i fokus je na njima:
 * querySelector -> "#name", ".name" -> vraca 1 element
 * querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */

