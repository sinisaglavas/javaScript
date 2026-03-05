/**
 * Izlistati 9 recepata
 * Ispisati u HTML + CSS po zelji
 * Sortirati po imenu (title) po abecedi
 */

let recipeHolder = document.getElementById('recipes');
let tagsHolder = document.getElementById('tagsHolder');

let params = new URLSearchParams(window.location.search);
let category = params.get('category');

if (category === null) {
    fetch('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc')
        .then(response => response.json())
        .then(function (data) {

            for (let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        })
} else {
    fetch('https://dummyjson.com/recipes/tag/'+category)
        .then(response => response.json())
        .then(function (data) {
            recipeHolder.innerHTML = '';
            for (let recipe of data.recipes) {
                appendCookingRecipe(recipe);
            }
        })
}

fetch('https://dummyjson.com/recipes/tags')
    .then(response => response.json())
    .then(function (data) {

        for (tag of data) {
            let tagElement = document.createElement('option');
            tagElement.innerText = tag;
            tagElement.value = tag;
            tagsHolder.appendChild(tagElement);
        }
    })

tagsHolder.addEventListener('change', function () {
    let apiUrl = 'https://dummyjson.com/recipes/tag/'+this.value;

    fetch(apiUrl).then(response => response.json().then(function (data) {
        recipeHolder.innerHTML = '';
        for (let recipe of data.recipes) {
            appendCookingRecipe(recipe);
        }
    }))
})

function buildInstructionsElements(instructions) {
    let recipeInstructions = document.createElement('ul');

    for (let instruction of instructions) {

        let instructionElement = document.createElement('li');
        instructionElement.innerText = instruction;

        recipeInstructions.appendChild(instructionElement);
    }
    return recipeInstructions;
}

function appendCookingRecipe(recipe) {

    let cookingInstructions = buildInstructionsElements(recipe.instructions);

    let singleRecipe = document.createElement('div');

    let recipeName = document.createElement('p');
    recipeName.innerText = recipe.name;

    let recipeCuisine = document.createElement('p');
    recipeCuisine.innerText = recipe.cuisine;

    let permalinkElement = document.createElement('a');
    permalinkElement.innerText = 'Show recipe';
    permalinkElement.href = 'permalink.html?id='+recipe.id;

    singleRecipe.append(recipeName, recipeCuisine, cookingInstructions, permalinkElement);

    recipeHolder.appendChild(singleRecipe);
}