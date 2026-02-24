
let cars = [
    'bmw',
    'audi',
    'Mercedes-benz',
    'MG',
    'toyota',
    'peugeot',
    'skoda',
    'zastava',
    'renault',
    'hyundai',
    'fiat',
    'jaguar',
    'lamborghini',
    'Ferrari',
    'volkswagen',
    'acura',
    'Aston-martin',
];

console.log(cars[0], cars[1], cars[2], cars[3], cars[4]);

// LOOPS
// for -> ponekad trebaju
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// forEach -> moram znati
// for in -> moram znati

// while
// do while
// for of

// Domaci: Ako ime automobila pocinje slovom a, ne ispisati ga
// Prvo: da li podaci moraju da se normalizuju? malo slovo uvek na izlazu

for (let i = 0; i < cars.length; i++) {

    let firstLetter = cars[i][0].toLowerCase();

    if (firstLetter === 'a') {
        continue;
    }

    console.log(cars[i]);
}
