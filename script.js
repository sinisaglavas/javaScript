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
     * stroke() isto ostaje
     */
    context.beginPath(); // kreni da crtas - 2d grafika

    context.moveTo(clickPoints[0].x, clickPoints[0].y); // kreni od
    for (let i = 1; i < clickPoints.length; i++){
        context.lineTo(clickPoints[i].x, clickPoints[i].y); // crtaj do
    }

    context.stroke(); // debljina linije - pojavljuje se linija
    clickPoints = [];
});

resetButton.addEventListener('click', function(){
    // od nule na x osi i od nule na y osi, do kontra ivica canvasElementa po sirini i po visini
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
})