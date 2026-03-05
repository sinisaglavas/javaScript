
let params = new URLSearchParams(window.location.search);
let recipeId = params.get('id');

let recipeElement = document.getElementById('recipe');
let tagsHolder = document.getElementById('tagsHolder');

fetch('https://dummyjson.com/recipes/'+recipeId)
    .then(response => response.json())
    .then(function (data) {
        let recipeName = document.createElement('h3');
        recipeName.innerText = data.name;

        let recipeCuisine = document.createElement('p');
        recipeCuisine.innerText = data.cuisine;

        let caloriesPerServing = document.createElement('p');
        caloriesPerServing.innerText = data.caloriesPerServing;

        recipeElement.append(recipeName, recipeCuisine, caloriesPerServing);

        console.log(data);
})

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
    window.location.href = 'index.html?category='+this.value; // window.location.href - sluzi da ga posaljeno na neku stranicu
})
