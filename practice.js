
alert('Welcome!')

let name = prompt('What is your name?').toLowerCase(); // normalizacija unete vrednosti

let names = ['admin', 'administrator', 'sinisa'];

/**
 * Da li je ime koje je korisnik uneo u array names?
 *  -> Sinisa -> Da li se to ime nalazi u array names?
 *      -> Ako se nalazi ispisati preko alerta "Dobrodosao administratore"
 *      -> Ako se ne nalzi onda ispisati "Nemate pristup sajtu"
 */

if (names.includes(name)) {
    alert('Welcome admin');
}
else {
    alert('Access denied!');
}