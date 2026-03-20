/**
 * Vezbe
 * 1. Sačuvaj string "Hello World" u LocalStorage pod ključem "poruka".
 */

let message = 'Hello World';
localStorage.setItem('message', message);

/**
 * 2. Pročitaj "poruka" iz LocalStorage i prikaži u <p>.
 */

let messageElement = document.getElementById('message');
messageElement.innerText = localStorage.getItem('message');

/**
 * 3. Napravi <input> i <button>; unos korisnika sačuvaj pod ključem "ime".
 */

let inputElement = document.getElementById('input');
let buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', () => {
    localStorage.setItem('name', inputElement.value);
});

/**
 * 4. Napravi funkciju koja briše "ime" iz LocalStorage.
 */

function deleteName() {
    localStorage.removeItem('name');
}

deleteName();

/**
 * 5. Sačuvaj niz ["Jabuka", "Banana", "Kruska"] pod ključem "voce".
 */

let array = ['Apple', 'Banana', 'Pear'];

localStorage.setItem('fruit', JSON.stringify(array));

/**
 * 6. Pročitaj niz "voce" i prikaži sve elemente u <ul> koristeći loop.
 */

for (let fruit of JSON.parse(localStorage.getItem('fruit'))) {
    let liElement = document.createElement('li');
    liElement.innerText = fruit;

    let fruits = document.getElementById('fruits');
    fruits.appendChild(liElement);
}

/**
 * 7. Napravi <input> za zadatke; uneseni tekst dodaj u niz "tasks" i sačuvaj nazad u
 * LocalStorage.
 */

let tasks = [];
let inputTask = document.getElementById('inputTask');
let newTask = document.getElementById('newTask');
newTask.addEventListener('click', () => {
    tasks.push(inputTask.value);

    localStorage.setItem('tasks', JSON.stringify(tasks));
});

/**
 * 8. Prikaži sve zadatke iz "tasks" u <ul> sa dugmetom za brisanje svakog zadatka.
 */

let allTasks = document.getElementById('allTasks');

let allTask = JSON.parse(localStorage.getItem('tasks')) || [];

for (let task of allTask) {
    let liElement = document.createElement('li');
    liElement.innerText = task;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    liElement.appendChild(deleteBtn);
    allTasks.appendChild(liElement);

    deleteBtn.addEventListener('click', () => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks = tasks.filter(item => item !== task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        liElement.remove(); // uklanja iz DOM-a
    });
}

/**
 * 9. Napravi <button> koji briše sve zadatke iz "tasks".
 */

let deleteAllTasks = document.getElementById('deleteTasks');
deleteAllTasks.addEventListener('click', () => {
    localStorage.removeItem('tasks');

    location.reload();
});

/**
 * 10. Broj klikova na dugme čuvaj u LocalStorage "clicks" i prikazuj u <p>.
 */

let clicksElement = document.getElementById('clicks');
let clicks = localStorage.getItem('clicks') ? JSON.parse(localStorage.getItem('clicks')) : 0;

let clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
    clicks++;

    localStorage.setItem('clicks', JSON.stringify(clicks));

    clicksElement.innerText = localStorage.getItem('clicks');
})


