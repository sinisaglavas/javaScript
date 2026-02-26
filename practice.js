/**
 * Napraviti array sa  objektima sa 8 automobila
 */

let cars = [
    {
        name: 'Audi A1',
        price: 33600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2026
    },
    {
        name: 'Audi A2',
        price: 4600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2020
    },
    {
        name: 'Audi A3',
        price: 5600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2021
    },
    {
        name: 'Audi A4',
        price: 6600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2022
    },
    {
        name: 'Audi A5',
        price: 7600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2023
    },
    {
        name: 'Audi A6',
        price: 18600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2024
    },
    {
        name: 'BMW X3',
        price: 12600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2019
    },
    {
        name: 'BMW X5',
        price: 55600,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a4-allroad-quattro-102-64adbc48cd15e.jpg?crop=0.764xw:0.645xh;0.0472xw,0.203xh&resize=1200:*',
        production_year: 2026
    },
];

/**
 * Napraviti petlju koja ce na stranici ispisati sve proizvode/automobile
 */

// for (let car of cars) {
//     // += mu kaze da dodaje, da ne pregazi prethodno
//     // ovaj pristup pisanja html je za izbegavanje
//     document.querySelector('#main').innerHTML += "<div><img src='"+car.image+"' alt='Car image'><p>"+car.name+" <span class='productPrice'>"+car.price+"</span></p></div>";
// }

for (let car of cars) {
    let div = document.createElement('div');
    let image = document.createElement('img');
    let paragraph = document.createElement('p');
    let span = document.createElement('span');
    let madeYearSpan = document.createElement('span');

    image.src = car.image;
    paragraph.textContent = car.name;
    span.textContent = car.price;
    madeYearSpan.textContent = car.production_year;

    paragraph.appendChild(span);
    paragraph.appendChild(madeYearSpan);
    div.appendChild(image);
    div.appendChild(paragraph);

    if (car.production_year === 2026) {
        let productionYearSpan = document.createElement('span');
        productionYearSpan.textContent = 'NOVO!';
        productionYearSpan.classList += 'productionYear'; // += da dodamo klasu, a samo znak = da postavimo da element ima klasu

        div.appendChild(productionYearSpan);
    }

    document.querySelector('#main').appendChild(div);

    console.log(div);
}