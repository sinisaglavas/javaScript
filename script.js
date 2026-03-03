/**
 * Napraviti event listener za klik unutar kanvasa
 * Pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 * Uzeti poziciju na ekranu posle klika
 * Nacrtati liniju koja spaja dve pozicije kreirane posle dva klika
 *
 * canvas je (trenutni koji radimo - 2d) prostor na stranici koju smo napravili - getContext('2d')
 */

let canvasElement = document.getElementById('drawArea');
let context = canvasElement.getContext('2d');
let clickPoints = []; // [x, y] , [x, y]...

let drawButton = document.getElementById('draw');
let resetButton = document.getElementById('resetDrawing');
let colorDescription = document.getElementById('colorDescription');
let drawWithColorButton = document.getElementById('drawWithColor');

let drawCounter = 1;

canvasElement.addEventListener('click', function(event){

    // Ako je clickPoints prazan znamo da je prvi klik
    // Ako clickPoints ima jedan upis znamo de je drugi klik
    // Ako clickPoints ima dva upisa znamo da je treci klik - vreme da ga ispraznimo

    let rect = canvasElement.getBoundingClientRect(); // vraca gde smo kliknuli
    // clientX - gde je korisnik kliknuo, ali samo unutar kocke
    let x = event.clientX - rect.left; // izracunata tacno pozicija na ekranu gde ce biti tacka
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y: y});
});

drawButton.addEventListener('click', function(){

    /**
     * beginPath i moveTo
     * Treba nam petlja koja radi lineTo -> preskoci broj 0
     * stroke() - ostaje
     */

    /**
     * 1. Iscrtaj path - drawPath()
     * 2. Povecaj drawCounter - incrementDrowCounter ? da li treba je pitanje - odgovor: ne treba jer je jako jednostavna
     * 3. resetuj clickPoint - resetClickPoints() ? Odgovor: Ne treba - logika je jednostavna
     * 4. Ispisi poruku - sendDrawMessage() ? odgovor: Ne treba za sada (jedna linija koda), trebace ako se dodaju funkcionalnosti
     * OPSTE PRAVILO: AKO JE VECA LOGIKA - pretvaramo u funkciju
     */

    let randomColor = generateRandomColor(); // randomColor je izmesten ovde
    drawPath(randomColor);
    drawPath('black'); // ako zelimo da crtamo sa odredjenom bojom

    sendDrawMessage(randomColor);
    resetClickPoints();
    incrementDrowCounter();
});

drawWithColorButton.addEventListener('click', function(){
    let color = prompt('Unesite boju koju zelite');
    drawPath(color);
    sendDrawMessage(color);
    resetClickPoints();
    incrementDrowCounter();

})

resetButton.addEventListener('click', function(){
    // od nule na x osi i od nule na y osi, do kontra ivica canvasElementa po sirini i po visini
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
})

function generateRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16); // generisanje random set brojeva i slova
}

function drawPath(color) {
    context.beginPath(); // kreni da crtas - 2d grafika

    context.moveTo(clickPoints[0].x, clickPoints[0].y); // kreni od ove tacke
    for (let i = 1; i < clickPoints.length; i++){
        context.lineTo(clickPoints[i].x, clickPoints[i].y); // crtaj do ove tacke
    }

    context.strokeStyle = color;
    context.stroke(); // debljina linije - pojavljuje se linija
}

function resetClickPoints() {
    clickPoints = [];
}

function incrementDrowCounter(){
    drawCounter++;
}

function sendDrawMessage(color){
    colorDescription.innerHTML += drawCounter + '. nacrtani oblik koristi ' + color + ' boju.<br>';
}