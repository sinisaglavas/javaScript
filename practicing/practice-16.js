/**
 * Vezbe
 * 1. API: https://jsonplaceholder.typicode.com/posts
 * Pošalji POST {title: "Test", body: "Sadržaj", userId: 1} i prikaži
 * odgovor u konzolu.
 */

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

let postResponse = await fetch(apiUrl, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
  title: 'Test',
  body: 'Sadrzaj',
  userId: 1
 })
});

let result = await postResponse.json();

console.log(result);

/**
 * 2. API: https://reqres.in/api/users
 * Napravi <form> sa input za ime i posao; submit šalje POST i prikazuje id i
 * createdAt u <div>.
 */

// curl -H "x-api-key: reqres_565b4ab78c0a4297bcfed0361a0a19a4" https://reqres.in/api/users?page=2
const apiUrl1 = 'https://reqres.in/api/users';

let dataForm = document.getElementById('dataForm');
let divElement = document.getElementById('divElement');

dataForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    let inputName = document.getElementById('inputName').value;
    let inputJob = document.getElementById('inputJob').value;

    let postResponse = await fetch(apiUrl1, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_565b4ab78c0a4297bcfed0361a0a19a4'
     },
     body: JSON.stringify({
      name: inputName,
      job: inputJob,
     })
    });

 let result = await postResponse.json();

 let h5Element = document.createElement('h5');
 let pElement = document.createElement('p');

 h5Element.innerText = 'ID: ' + result.id;
 pElement.innerText = 'Created at: ' + result.createdAt;

 divElement.append(h5Element, pElement);
})

/**
 * 3. API: https://dummyjson.com/users/add
 * Napravi funkciju koja šalje POST sa {firstName: "Petar", lastName:
 * "Petrović", age: 25} i ispisuje JSON odgovor u konzolu.
 */

const apiUrl2 = 'https://dummyjson.com/users/add';

let name = 'Petar';
let secondName = 'Petrovic';
let age = 25;

async function postData(firstName, lastName, age) {
 let postResponse = await fetch(apiUrl2, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
   firstName: firstName,
   lastName: lastName,
   age: age
  })
 })

 let data = await postResponse.json();

 console.log(data);
}

postData(name, secondName, age);

/**
 * * 4. API: https://jsonplaceholder.typicode.com/posts
 * Napravi <button> koji klikom šalje POST sa fiksnim podacima i prikazuje kreirani id u
 * <p>.
 */

let sendData = document.getElementById('sendData');
let showData = document.getElementById('showData');

sendData.addEventListener('click', async function() {
    let postResponse = await fetch(apiUrl, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
      title: 'newTest',
      body: 'somethingContent',
      userId: 10
     })
    });

    showData.innerText = 'ID: ' + (await postResponse.json()).id;
})

/**
 * 5. API: https://reqres.in/api/users
 * Napravi funkciju dodajKorisnika(name, job) koja šalje POST i ispisuje
 * "Uspešno kreirano: ID = X" u konzolu.
 */

let firstName = 'Milan';
let favouriteJob = 'Programmer';

async function addUser(name, job) {
 let postResponse = await fetch(apiUrl1, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   'x-api-key': 'reqres_565b4ab78c0a4297bcfed0361a0a19a4'
  },
  body: JSON.stringify({
   name: name,
   job: job
  })
 })

 console.log('Uspesno kreirano: ID = ' + (await postResponse.json()).id);
}

addUser(firstName, favouriteJob);

/**
 * 6. API: https://dummyjson.com/users/add
 * Napravi niz korisnika [{firstName, lastName, age}] i pomoću loop-a šalji POST
 * za svaki; ispiši id odgovora u konzolu.
 */

let arrayUsers = [
 {firstName: 'Mark', lastName: 'Zuckerberg', age: 40},
 {firstName: 'Jennifer', lastName: 'Aniston', age: 40},
 {firstName: 'Steve', lastName: 'Jobs', age: 61},
 {firstName: 'Bill', lastName: 'Gates', age: 65}
];

for (let user of arrayUsers) {
 let postResponse = await fetch(apiUrl2, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(user)
 });

 console.log('ID odgovora: ' + (await postResponse.json()).id);
}

 /**
 * 7. API: https://jsonplaceholder.typicode.com/posts
 * Napravi <form> sa title i body; submit šalje POST i dodaje <li> u <ul> sa
 * naslovom i body.
  */

 let userForm = document.getElementById('userForm');

 userForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  let postResponse = await fetch(apiUrl, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
    title: title,
    body: body,
    userId: 1
   })
  });

  let result = await postResponse.json();

  let allData = document.getElementById('allData');

  let liElement = document.createElement('li');

  liElement.innerText = result.title + ', ' + result.body;

  allData.append(liElement);
 })

 /**
 * 8. API: https://reqres.in/api/users
 * Napravi funkciju koja šalje POST sa nasumičnim name i job; odgovor ispiši u alert
 * prozoru.
  */

async function postRandomData() {
 let postResponse = await fetch(apiUrl1, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   'x-api-key': 'reqres_565b4ab78c0a4297bcfed0361a0a19a4'
  },
  body: JSON.stringify({
   name: 'randomName',
   job: 'randomJob'
  })
 });

 let result = await postResponse.json();

 alert(result.id + ', ' + result.name + ', ' + result.job);
}

postRandomData();

 /**
 * 9. API: https://dummyjson.com/users/add
 * Napravi <button> koji klikom šalje POST i menja boju <div> u zeleno ako je kreiranje
 * uspešno.
  */

let changeColor = document.getElementById('changeColor');
changeColor.addEventListener('click', async function() {
 let postResponse = await fetch(apiUrl2, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
   firstName: 'John',
   lastName: 'Wayne',
   age: 119,
  })
 });

 if (postResponse.status === 201 || postResponse.status === 200) {
  let divElement = document.getElementById('div');
  divElement.style.backgroundColor = 'green';
 }
})

 /**
 * 10. API: https://jsonplaceholder.typicode.com/posts
 * Napravi funkciju koja šalje POST i vraća true ako je status 201, false inače; ispiši
 * rezultat u <p>.
 */

 async function postData1() {
  let postResponse = await fetch(apiUrl, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
    title: 'oneTest',
    body: 'somethingContent',
    userId: 20
   })
  });

  let status = document.getElementById('status');
  status.innerText = postResponse.status === 201 ? 'true' : 'false';
 }

 postData1();