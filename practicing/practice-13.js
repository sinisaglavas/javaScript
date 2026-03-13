
const apiKey = 'live_V4PSLPXFWQJRwOzahAjN1lFUOJoIkeIKqft96ejcgEU1zBgc9VLtnkHWBhedWuKF';

const catApi = 'https://api.thecatapi.com/v1/';

/**
 * Vezbe
 * 1. Koristi The Cat API – fetch-uj sve rase mačaka i prikaži imena (name) u <ul>.
 */

const breedEndPoint = 'breeds';

let response = await fetch(catApi+breedEndPoint);
let result = await response.json();

let catBreeds = document.getElementById('catBreeds');
let ulElement = document.createElement('ul');

for (let catBreed of result) {
    let liElement = document.createElement('li');
    liElement.innerText = catBreed.name;

    ulElement.append(liElement);
}

catBreeds.appendChild(ulElement);

/**
 * 2. Koristi The Cat API – fetch-uj sve rase i ispiši težinu (weight.metric) i visinu
 * (height.metric) u <div> za svaku rasu.
 */

let catInfo = document.getElementById('catInfo');

for (let aboutCat of result) {
    let divElement = document.createElement('div');

    let h4Element = document.createElement('h4');
    h4Element.innerText = aboutCat.name;

    let catWeightInfo = document.createElement('p');
    catWeightInfo.innerText = aboutCat.weight.metric;

    divElement.append(h4Element, catWeightInfo);

    catInfo.appendChild(divElement);
}

/**
 * 3. Koristi The Cat API – fetch-uj sve rase i dodaj <p> samo za one rase koje imaju
 * temperament "Affectionate".
 */

let affectionate = document.getElementById('affectionate');

for (let allCats of result) {
    if (allCats.temperament.includes('Affectionate')) {
        let pElement = document.createElement('p');
        pElement.innerText = allCats.name;
        let h6Element = document.createElement('h6');
        h6Element.innerText = allCats.temperament;

        affectionate.append(pElement, h6Element);
    }
}

/**
 * 4. Koristi The Cat API – fetch-uj sve rase i napravi <select> dropdown sa imenima rasa.
 */

let allBreeds = document.getElementById('allBreeds');

for (let allBreed of result) {
    let optionElement = document.createElement('option');
    optionElement.innerText = allBreed.name;

    allBreeds.appendChild(optionElement);
}

/**
 * 5. Koristi The Cat API – fetch-uj sve rase i dodaj <div> sa imenom i life_span za sve rase
 * koje imaju životni vek više od 15 godina.
 */

let nameBreeds = document.getElementById('nameBreeds');

for (let nameBreed of result) {

    let lifeSpan = nameBreed.life_span; // "9 - 15"
    let parts = lifeSpan.split(' - '); // ["9", "15"]
    let maxLife = Number(parts[1]); // 15

    if (maxLife > 15) {
        let pElement = document.createElement('p');
        pElement.innerText = nameBreed.name;

        let h6Element = document.createElement('h6');
        h6Element.innerText = nameBreed.life_span;

        nameBreeds.append(pElement, h6Element);
   }
}

/**
 * 6. Koristi The Cat API – fetch-uj sve rase i prikaži u <ul> samo one koje su pogodne za
 * stan (adaptability >= 5).
 */

let adaptability = document.getElementById('adaptability');

for (let adaptabilityCat of result) {

    if (adaptabilityCat.adaptability >= 5) {
        let liElement = document.createElement('li');
        liElement.innerText = adaptabilityCat.name;

        adaptability.appendChild(liElement);
    }
}

/**
 * 7. Koristi The Cat API – fetch-uj sve rase i kreiraj niz sa imenima, zatim pomoću funkcije
 * sortiraj imena po abecedi i prikaži u <ul>.
 */

let nameAsc = document.getElementById('nameAsc');
let array = [];

for (let i = 0; i < result.length; i++) {
    array.push(result[i].name);
    array.sort();

    let liElement = document.createElement('li');
    liElement.innerText = array[i];

    nameAsc.appendChild(liElement);
}

/**
 * 8. Koristi The Cat API – fetch-uj sve rase i izračunaj prosečnu težinu (weight.metric) i
 * prikaži u <p>.
 */

let averageWeight = document.getElementById('averageWeight');

for (let allCatBreeds of result) {
    let weight = allCatBreeds.weight.metric; // "9 - 15"
    let parts = weight.split(' - '); // ["9", "15"]
    let array = parts.map(Number); // [9, 15]
    let avgWeight = (array[0] + array[1]) / array.length;

    let pElement = document.createElement('p');
    pElement.innerText = avgWeight;

    averageWeight.appendChild(pElement);
}

/**
 * 9. Koristi The Cat API – fetch-uj sve rase i ispiši <li> samo za rase koje imaju
 * dog_friendly >= 4.
 */

let dogFriendly = document.getElementById('dogFriendly');

for (let dogFriendlyCat of result) {

    if (dogFriendlyCat.dog_friendly >= 4) {
        let liElement = document.createElement('li');
        liElement.innerText = dogFriendlyCat.name;

        dogFriendly.appendChild(liElement);
    }
}

/**
 * 10. Koristi The Cat API – fetch-uj sve rase i kreiraj niz svih temperamenta, zatim prikaži
 * jedinstvene temperament vrednosti u <ul>.
 */

let temperament = document.getElementById('temperament');

let allTemperaments = [];

for (let temperamentCat of result) {
    let temperamentArray = temperamentCat.temperament.split(', ');
    allTemperaments.push(...temperamentArray); // ... -> (tri tacke) ne ubacuje ceo niz nego pojedinacne elemente iz niza
}

let uniqueTemperaments = [...new Set(allTemperaments)];
console.log(uniqueTemperaments);
for (let allTemperament of uniqueTemperaments) {
    let liElement = document.createElement('li');
    liElement.innerText = allTemperament;

    temperament.appendChild(liElement);
}