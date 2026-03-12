/**
 * Vežbe
 * 1. Napravi funkciju napraviCanvas(width, height) koja kreira <canvas> sa zadatim
 * dimenzijama i dodaje ga u <div id="container"></div>.
 */

function napraviCanvas(width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = '1px solid black';

    let container = document.getElementById("container");
    container.appendChild(canvas);
}
napraviCanvas(200, 300)

/**
 * 2. Napravi funkciju crtajKrug(ctx, x, y, r, boja) koja crta krug na canvas-u sa
 * datom koordinatom, poluprečnikom i bojom.
 */

function crtajKrug(ctx, x, y, r, boja) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI); // Kreira kružnu putanju
    ctx.fillStyle = boja;
    ctx.fill();
    ctx.closePath();
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

crtajKrug(ctx, 100, 100, 50, 'red');

/**
 * 3. Napravi funkciju crtajPravougaonik(ctx, x, y, width, height, boja) koja
 * crta pravougaonik sa zadatim dimenzijama i bojom.
 */

function crtajPravougaonik(ctx, x, y, width, height, boja) {
    ctx.fillStyle = boja;
    ctx.fillRect(x, y, width, height);
}

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

crtajPravougaonik(ctx2, 50, 50, 150, 100, "green");

/**
 * 4. Napravi funkciju povecajBroj(broj) koja vraća broj uvećan za 1, zatim pozovi
 * funkciju i iscrtaj broj u canvas-u koristeći fillText.
 */

function povecajBroj(broj) {
    return broj + 1;
}

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

let noviBroj = povecajBroj(7);

ctx3.font = "30px Arial";
ctx3.fillStyle = "black";
ctx3.fillText(noviBroj, 150, 150);

/**
 * 5. Napravi funkciju nasumicnaBoja() koja vraća nasumičnu boju u formatu
 * rgb(r,g,b).
 */

function nasumicnaBoja() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb('+r+','+g+','+b+')';
}

/**
 * 6. Napravi funkciju crtajLiniju(ctx, x1, y1, x2, y2, boja) koja crta liniju
 * između dve tačke.
 */

function crtajLiniju(ctx, x1, y1, x2, y2, boja) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = boja;
    ctx.stroke();
}

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

ctx4.lineWidth = 2;

crtajLiniju(ctx4, 100, 100, 50, 50, 'red');

/**
 * 7. Napravi funkciju prosekNiza(niz) koja vraća prosečnu vrednost brojeva u nizu, a
 * zatim iscrtaj tu vrednost u canvas-u kao tekst.
 */

function prosekNiza(niz) {
    let ukupanBroj = 0;
    for (let broj of niz) {
        ukupanBroj += broj;
    }
    return ukupanBroj / niz.length;
}

let niz = [4, 6, 8, 10];
let prosecanBroj = prosekNiza(niz);

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");

ctx5.fillText(prosecanBroj, 100, 50);

/**
 * 8. Napravi funkciju crtajKombinaciju(ctx) koja crta tri kruga u različitim bojama i
 * veličinama (poziva crtajKrug i nasumicnaBoja).
 */

function crtajKombinaciju(ctx) {

    crtajKrug(ctx6, 100, 100, 40, nasumicnaBoja());

    crtajKrug(ctx6, 200, 150, 30, nasumicnaBoja());

    crtajKrug(ctx6, 300, 100, 50, nasumicnaBoja());
}

const canvas6 = document.getElementById("canvas6");
const ctx6 = canvas6.getContext("2d");

crtajKombinaciju(ctx6);


/**
 * 9. Napravi funkciju maksBroj(niz) koja vraća najveći broj u nizu, a zatim iscrtaj kvadrat
 * čija je strana jednaka tom broju u canvas-u.
 */

function maksBroj(niz) {
    let najveciBroj = 0;

    for (let broj of niz) {
        if (broj > najveciBroj) {
            najveciBroj = broj;
        }
    }
    return najveciBroj;
}

let array = [4, 6, 500, 8, 10, 15];

let maxNumber =  maksBroj(array);

const canvas7 = document.getElementById("canvas7");
const ctx7 = canvas7.getContext("2d");

ctx7.fillRect(0,0, maxNumber, maxNumber);

/**
 * 10. Napravi funkciju ispisiTekst(ctx, tekst, x, y, boja) koja vraća string sa
 * tekstom i crta ga na canvas-u na zadatim koordinatama.
 */

function ispisiTekst(ctx, tekst, x, y, boja) {
    ctx.font = "10px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(tekst, x, y);
    ctx.fillStyle = boja;
}

const canvas8 = document.getElementById("canvas8");
const ctx8 = canvas8.getContext("2d");

ispisiTekst(ctx8, 'Hello', 50, 50, 'red');