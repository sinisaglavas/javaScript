/**
 * fetch → Response → response.json() → pravi podaci
 *
 * Vezbe
 * 1. Koristi JSONPlaceholder API
 * (https://jsonplaceholder.typicode.com/users) – fetch-uj sve korisnike i
 * ispiši njihova imena u konzolu.
 */

const PlaceholderApiUsers = 'https://jsonplaceholder.typicode.com/users';

let response = await fetch(PlaceholderApiUsers);
let result = await response.json();

for (let user of result) {
    console.log(user.name);
}

/**
 * 2. Koristi JSONPlaceholder API
 * (https://jsonplaceholder.typicode.com/posts) – fetch-uj sve postove i
 * prikaži naslove (title) u <ul> listi.
 */

const placeholderApiPosts = 'https://jsonplaceholder.typicode.com/posts';

let response2 = await fetch(placeholderApiPosts);
let result2 = await response2.json();

let title = document.getElementById('title');

for (let post of result2) {
    let liElement = document.createElement('li');
    liElement.innerText = post.title;

    title.appendChild(liElement);
}


/**
 * 3. Koristi DummyJSON API (https://dummyjson.com/products) – fetch-uj
 * proizvode i prikaži imena proizvoda u <div> pomoću createElement.
 */

let response3 = await fetch('https://dummyjson.com/products');
let result3 = await response3.json();

let products = document.getElementById('products');

for (let product of result3.products) {
   let pElement = document.createElement('p');
   pElement.innerText = product.title;

   products.appendChild(pElement);
}

/**
 * 4. Koristi JSONPlaceholder API – fetch-uj jednog korisnika po id i ispiši njegov email u
 * konzolu.
 */

let response4 = await fetch('https://jsonplaceholder.typicode.com/users?id=1');
let result4 = await response4.json();

for (let oneUser of result4) {
    console.log(oneUser.email);
}


/**
 * 5. Koristi JSONPlaceholder API – fetch-uj sve TODO zadatke (/todos) i prikaži samo
 * one koji su završeni (completed: true).
 */

let response5 = await fetch('https://jsonplaceholder.typicode.com/todos');
let result5 = await response5.json();

for (let todoTasks of result5) {
    if (todoTasks.completed) {
        console.log(todoTasks);
    }
}

/**
 * 6. Koristi PokeAPI (https://pokeapi.co/api/v2/pokemon?limit=10) – fetch-uj
 * prvih 10 Pokémon-a i prikaži njihova imena u <ul> listi.
 */

let response6 = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
let result6 = await response6.json();

let pokemons = document.getElementById('pokemons');
for (let pokemonList of result6.results) {
    let liElement = document.createElement('li');
    liElement.innerText = pokemonList.name;

    pokemons.appendChild(liElement);
}

/**
 * 7. Koristi PokeAPI – fetch-uj jednog Pokémon-a po imenu i prikaži njegov height i
 * weight u <p> elementu.
 */

let response7 = await fetch('https://pokeapi.co/api/v2/pokemon/5/');
let result7 = await response7.json();

let pElement = document.createElement('p');
pElement.innerText = 'Height:' + result7.height + ', Weight' + result7.weight;
console.log(pElement);


/**
 * 8. Koristi DummyJSON API – fetch-uj sve proizvode i prikaži samo one čija je cena veća
 * od 500 u listi (<ul>).
 */

for (let product of result3.products) {
    if (product.price > 500) {
        console.log(product.price);
    }
}

/**
 * 9. Koristi JSONPlaceholder API – fetch-uj sve korisnike i prikaži samo one čija adresa
 * sadrži "Suite" u <ul>.
 */

let ulElement = document.createElement('ul');

for (let user of result) {

    if (user.address.street.includes('Suite')) {
        let liElement = document.createElement('li');
        liElement.innerText = user.name + ' Address:' + user.address.street;
        ulElement.append(liElement);
    }
}

console.log(ulElement); // ne postoji

/**
 * 10. Koristi JSONPlaceholder API – fetch-uj sve postove i prikaži samo postove čiji naslov
 * sadrži reč "qui" u <ul>.
 */

let ulElement1 = document.createElement('ul');

for (let post of result2) {
    if (post.title.includes('qui')) {
        let liElement = document.createElement('li');
        liElement.innerText = post.title;
        ulElement1.append(liElement);
    }
}

console.log(ulElement1);