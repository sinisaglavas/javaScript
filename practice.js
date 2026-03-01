/**
 * Napraviti funkciju koja se zove checkCar
 * Proslediti 2. stvari: listu automobila, automobil koji trazite
 * Ako uspesno pronadje automobil koji zelite u listi vratiti true
 * Ako ne pronadje vratiti false
 */

let cars = ['BMW', 'Mercedes', 'Audi'];

function checkCar(carList, carName)
{
    for (let name of carList) {
        if (name.toLowerCase() === carName.toLowerCase()) { // uvek kada radimo ove stvari treba da standardizujemo levu i desnu stranu
            return true; // naznaka - kada u petlji dodje do return petlja se zaustavlja
        }
    }
    return false; // sve dok ne nalazi auto ovo ce biti netacno - default value is false
}
let result = checkCar(cars, 'BMw');
console.log(result);

let result2 = cars.includes('BmW'); // funkcija unutar JS - osetljiva je na mala i velika slova
console.log(result2);