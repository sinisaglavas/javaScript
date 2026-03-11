
const mealDbAPI = 'https://themealdb.com/api/json/v1/1/';

const data = await getMealDBData('categories.php');

const categorySelect = document.getElementById('foodCategories');

for (let category of data.categories) {

    appendCategory(category);
}

let mealsHolder = document.getElementById('mealsHolder');

categorySelect.addEventListener('change', async () => {

    mealsHolder.innerHTML = '';

    const mealsJson = await getMealDBData('filter.php?c='+categorySelect.value);

   for (let meal of mealsJson.meals) {

       let mealDiv = showMeal(meal);

       mealDiv.addEventListener('click', async () => {

           const oneMeal = await getMealDBData('lookup.php?i='+meal.idMeal);

           let cocktail = await getRandomCocktail();

           console.log(cocktail);

           let recipeText = document.getElementById('recipeText');
           recipeText.innerText = oneMeal.meals[0].strInstructions;
           document.getElementById('popup').style.display = 'flex';

           document.getElementById('cocktail').innerText = cocktail.drinks[0].strDrink+': '+cocktail.drinks[0].strInstructions;

       })
   }
})

    document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
})

function showMeal(meal) {
    let mealDiv = document.createElement('div');
    mealDiv.classList.add('singleMeal');

    let mealName = document.createElement('h4');
    mealName.innerText = meal.strMeal;

    let mealImage = document.createElement('img');
    mealImage.setAttribute('src', meal.strMealThumb);
    mealImage.classList.add('mealImage');

    mealDiv.append(mealName, mealImage);
    mealsHolder.appendChild(mealDiv);

    return mealDiv;
}


function appendCategory(category) {
    const categoryElement = document.createElement('option');
    categoryElement.value = category.strCategory;
    categoryElement.innerText = category.strCategory;

    categorySelect.append(categoryElement);
}

async function getMealDBData(endpoint) {
    let response = await fetch(mealDbAPI+endpoint);
    return await response.json();
}

async function getRandomCocktail() {
    let response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    return await response.json();
}



