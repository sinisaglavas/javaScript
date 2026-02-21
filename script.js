

let products = ['hleb', 'mleko', 'jogurt'];

console.log(products);

products.push('mango');

console.log(products);

products.splice(0, 1);

console.log(products);

let cars = ['bmw', 'audi', 'mercedes'];

console.log(cars);

cars[0] = 'zastava';

console.log(cars);

cars.sort();

console.log(cars);

let personalID = {
    name: 'John',
    lastName: 'Doe',
    dateOfBirth: 'January',
    hobbies: ['programming', 'teaching', 'running']
};
console.log(personalID);

personalID.height = 190;

console.log(personalID);

console.log(personalID.hobbies[0]);

let sentence = personalID.name + ' has gone ' + personalID.hobbies[2];

console.log(sentence);

/*
    * object - shop:
    * name, products (lista), openingHours, closingHours
 */

let shop = {
    name: 'pet',
    products: ['dogs', 'cats', 'rabbits'],
    openingHours: 8,
    closingHours: 20
};

console.log(shop);