/**
 * Vezbe
 * 1. Koristi JSONPlaceholder API (/users) – fetch-uj sve korisnike i ispiši njihova imena u
 * konzolu.
 */

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

 let response = await fetch(apiUrl);
 let result = await response.json();

 for (let user of result) {
     console.log(user.name);
 }

/**
 * 2. Koristi JSONPlaceholder API (/posts) – fetch-uj postove i prikaži naslove u <ul>.
 */

const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts';

let response2 = await fetch(apiUrl2);
let result2 = await response2.json();

let ulElement = document.createElement('ul');

for (let post of result2) {
    let liElement = document.createElement('li');
    liElement.innerText = post.title;

    ulElement.append(liElement);
}

console.log(ulElement);

/**
 * 3. Koristi JSONPlaceholder API (/todos) – fetch-uj sve zadatke i prikaži samo završene
 * (completed = true) u listi.
 */

const apiUrl3 = 'https://jsonplaceholder.typicode.com/todos';

let response3 = await fetch(apiUrl3);
let result3 = await response3.json();

let ulElement2 = document.createElement('ul');

for (let todoTasks of result3) {
    if (todoTasks.completed) {
        let liElement2 = document.createElement('li');
        liElement2.innerText = todoTasks.title;
        ulElement2.append(liElement2);
    }
}

console.log(ulElement2);

/**
 * 4. Koristi DummyJSON API (/products) – fetch-uj proizvode i prikaži samo one čija je
 * cena > 500 u <ul>.
 */

const apiUrl4 = 'https://dummyjson.com/products';

let response4 = await fetch(apiUrl4);
let result4 = await response4.json();

let ulElement3 = document.createElement('ul');

for (let product of result4.products) {
    if (product.price > 500) {
        let liElement3 = document.createElement('li');
        liElement3.innerText = product.title + ', price:' + product.price;
        ulElement3.append(liElement3);
    }
}

console.log(ulElement3);

/**
 * 5. Koristi DummyJSON API – fetch-uj proizvode i dodaj <div> sa nazivom i cenom
 * svakog proizvoda.
 */

const apiUrl5 = 'https://dummyjson.com/products';

let response5 = await fetch(apiUrl5);
let result5 = await response5.json();

let divForProducts = document.createElement('div');

for (let product of result5.products) {

    let divElement = document.createElement('div');
    divElement.innerText = product.title + ', price:' + product.price;
    divForProducts.append(divElement);
}

console.log(divForProducts);

/**
 * 6. Koristi PokeAPI (/pokemon?limit=10) – fetch-uj prvih 10 Pokémon-a i prikaži imena
 * u <ul>.
 */

const apiUrl6 = 'https://pokeapi.co/api/v2/pokemon?limit=10';

let response6 = await fetch(apiUrl6);
let result6 = await response6.json();

let ulElement4 = document.createElement('ul');

for (let pokemonList of result6.results) {
    let liElement4 = document.createElement('li');
    liElement4.innerText = pokemonList.name;
    ulElement4.append(liElement4);
}

console.log(ulElement4);

/**
 * 7. Koristi PokeAPI – fetch-uj jednog Pokémon-a po imenu i prikaži height i weight u
 * <p>.
 */

const apiUrl7 = 'https://pokeapi.co/api/v2/pokemon/5/';

let response7 = await fetch(apiUrl7);
let result7 = await response7.json();

let pElement = document.createElement('p');
pElement.innerText = 'Height:' + result7.height + ', Weight:' + result7.weight;
console.log(pElement);

/**
 * 8. Koristi The Cat API (/breeds) – fetch-uj sve rase mačaka i prikaži njihova imena u
 * <ul>.
 */

const apiUrl8 = 'https://api.thecatapi.com/v1/breeds';

let response8 = await fetch(apiUrl8);
let result8 = await response8.json();

let ulElement5 = document.createElement('ul');

for (let races of result8) {
    let liElement5 = document.createElement('li');
    liElement5.innerText = races.name;
    ulElement5.append(liElement5);
}

console.log(ulElement5);

/**
 * 9. Koristi The Cat API – fetch-uj rase i dodaj <p> samo za rase sa affection_level >=
 * 4.
 *
 * Dobio sam odgovor too many request u jednom momentu, ali kasnije je radio normalno.
 */

const apiUrl9 = 'https://api.thecatapi.com/v1/breeds';

let response9 = await fetch(apiUrl9);
let result9 = await response9.json();

let divForCatRaces = document.createElement('div');

for (let races of result9) {
    if (races.affection_level >= 4) {
        let pElement = document.createElement('p');
        pElement.innerText = races.name + ', Affection level:' + races.affection_level;
        divForCatRaces.append(pElement);
    }
}

console.log(divForCatRaces);

/**
 * 10. Koristi The Cat API – fetch-uj rase i napravi <select> dropdown sa imenima rasa.
 */

const apiUrl10 = 'https://api.thecatapi.com/v1/breeds';

let response10 = await fetch(apiUrl10);
let result10 = await response10.json();

let selectElement = document.createElement('select');

for (let races of result10) {
    let optionElement = document.createElement('option');
    optionElement.innerText = races.name;
    selectElement.append(optionElement);
}

console.log(selectElement);