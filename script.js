
// SEARCH
let cities = [
    'Svi',
    'Beograd',
    'Novi Sad',
    'Nis',
    'Podgorica',
    'Zagreb',
    'Sarajevo',
    'Pula',
    'Rijeka',
    'Mostar'
];

let types = [
    'Stanovi',
    'Kuce',
    'Poslovni prostori',
    'Placevi',
    'Garaze/Parking'
];

let rooms = [
    'Garsonjera',
    'Jednosoban stan',
    'Jednoiposoban stan',
    'Dvosoban stan',
    'Dvoiposoban stan',
    'Trosoban stan',
    'Troiposoban stan',
    'Troiposoban stan',
    'Cetvorosoban stan',
    '4.5 i visesoban stan'
];

let realEstates = [
    {
        city: 'Beograd',
        option: 'Garsonjera',
        type: 'Stanovi',
        price: 48200,
        size: 25
    },
    {
        city: 'Novi Sad',
        option: 'Jednosoban stan',
        type: 'Stanovi',
        price: 55000,
        size: 49
    },
    {
        city: 'Podgorica',
        option: 'Dvosoban stan',
        type: 'Stanovi',
        price: 79000,
        size: 70
    },
    {
        city: 'Zagreb',
        option: 'Trosoban stan',
        type: 'Stanovi',
        price: 120000,
        size: 110
    },
    {
        city: 'Sarajevo',
        option: 'Cetvorosoban stan',
        type: 'Stanovi',
        price: 150000,
        size: 125
    },
    {
        city: 'Nis',
        option: null,
        type: 'Kuce',
        price: 100000,
        size: 100
    },
    {
        city: 'Pula',
        option: 'Dvoiposoban stan',
        type: 'Stanovi',
        price: 65000,
        size: 68
    },
    {
        city: 'Mostar',
        option: null,
        type: 'Poslovni prostori',
        price: 70000,
        size: 45
    },
];


let citiesSelector = document.querySelector('#citiesSelector');
let typesSelector = document.querySelector('#typeSelector');
let roomSelector = document.querySelector('#roomSelector');
let searchButton = document.querySelector('#searchPropertiesButton');


for (let oneCity of cities) {

    let option = document.createElement('option');

    option.textContent = oneCity;

    citiesSelector.appendChild(option);

    // Ako postoji grad koji nema nekretninu, dodati atribut 'disabled'
    let cityFound = false; // varijabla sluzi da mi znamo da li smo nasli taj grad ili ne

    for (let estate of realEstates) {
        // sluzi samo da pronadje grad koji ima nekretninu i prekida se dalje izvrsavanje pa ide ponovo u petlju (linija 103)
        if (estate.city === oneCity) {
             cityFound = true;
             break;
        }
    }

    if (!cityFound && oneCity !== 'Svi') { // cityFound === false
        option.setAttribute('disabled', 'true');
    }
}

for (let oneType of types) {

    let option = document.createElement('option');

    option.textContent = oneType;

    typesSelector.appendChild(option);
}

for (let room of rooms) {

    let option = document.createElement('option');

    option.textContent = room;

    roomSelector.appendChild(option);
}

for (let estate of realEstates) {
    let estateDiv = document.createElement('div');
    estateDiv.classList.add('realEstate')
    let city = document.createElement('h1');
    city.classList.add('city');
    let option = document.createElement('p');
    let price = document.createElement('p');
    let size = document.createElement('p');

    city.textContent = estate.city;
    option.textContent = estate.option ?? '--';
    price.textContent = estate.price + ' eur';
    size.textContent = estate.size + ' m2';

    estateDiv.append(city);
    estateDiv.append(option);
    estateDiv.append(price);
    estateDiv.append(size);

    document.querySelector('#estates').appendChild(estateDiv);
}

let chosenCity = null;
let chosenType = null;
let chosenRoom = null;

// PRETRAGA NEKRETNINA
// event hvata dogadjaj - ima sve info vezane za promenu (currentTarget - 'select' koji menjamo)
citiesSelector.addEventListener('change', (event) => {
    chosenCity = event.target.value;

    let allEstates = document.getElementsByClassName('realEstate');

    for (let realEstate of allEstates) {
        let estateCity = realEstate.querySelector('.city').textContent; // u divu koji sam dobio gadjam klasu 'city' koja je kreirana na liniji 133

        realEstate.classList.remove('hidden');
       //  beograd     !==  'svi'           'svi'   !== 'svi' // ovde uklanja sve klase 'hidden' i dobijamo ponovo sve realEstate divove
        if (estateCity !== chosenCity && chosenCity !== 'Svi') {
            realEstate.classList.add('hidden');
        }
    }
});

typesSelector.addEventListener('change', (event) => {
    chosenType = event.target.value;
});

roomSelector.addEventListener('change', (event) => {
    chosenRoom = event.target.value;
});

searchButton.addEventListener('click', (event) => {
    console.log(chosenCity + ' ' + chosenType + ' ' + chosenRoom);
});