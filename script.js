/**
 * https://dummyjson.com/recipes?sortBy=name&order=asc
 *
 * GET: https://dummyjson.com/login?username=toma&password=12345 -> javno prosledjeni podaci
 * GET se koristi za pretragu na primer
 *
 * POST: https://dummyjson.com/login (username: toma, password: 12345) -> osetljivi podaci se tajno prosledjuju (sifrovani)
 * Ovaj (POST) podatak nece moci niko da uzme i da ga krekuje
 * POST se koristi kod: registracija, login, password reset, kupovina
 *
 * PATCH -> kada azuriramo manje podataka
 * PUT -> kada azuriramo vise podataka
 * DELETE -> brisanje podataka
 *
 * U inspektoru kada gledamo network i pronadjemo fetch poziv videcemo da se pojavljuje dva puta (jedan je preFlight)
 * i to je potpuno normalna stvar - on gleda da li je siguran server
 *
 * Razlika izmedju http i https:
 * http -> obican protokol
 * https -> (s) = secure protokol - ima SSL sertificate i njegova uloga je da dokaze validnost sajta
 * i garantuje da ce post podaci biti kriptovani
 */

for (let i = 18; i <= 100; i++) {
    let optionElement = document.createElement('option');
    optionElement.innerText = i;
    document.getElementById('age').append(optionElement);
}

document.getElementById('registerButton').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;

    if (name.trim() === '' || lastName.trim() === '') {
        alert('Morate uneti sve podatke!');
        return;
    }
    register(name, lastName, age);
})

document.getElementById('delete').addEventListener('click', function () {

    let apiUrl =  'https://dummyjson.com/users/'+this.getAttribute('userId');

    fetch(apiUrl, {
        method: 'DELETE'
    })
    .then(res => res.json())
        .then(function (data) {
            console.log(data);
        })


});

function register(name, lastName, age) {
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
        })
    })
        .then(res => res.json())
        .then(function (data) {
            let deleteButton = document.getElementById('delete');
            deleteButton.setAttribute('userId', data.id);
            deleteButton.removeAttribute('disabled');
            alert('Uspesno ste se registrovali sa imenom '+data.firstName);
        })
}

fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    // dodatne informacije koje prosledjujemo prilikom pozivanja API - nije obavezan ali ga je bolje uvek proslediti
    // server koji prima podatke ce znati o kakvim podacime je rec - a to je sadrzaj u vidu json objekta
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ // json u vidu stringa
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // koliko traje nas login
    }), // nase podatke saljemo u vidu stringa, a mi ubacujemo podatke kao objekat
   // credentials: 'include' // mi pozivamo sa kredencijalima
})
.then(response => response.json())
.then(function(data) {
    console.log(data);
})