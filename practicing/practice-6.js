/**
 * 1. Napravi varijablu broj = 1.
 * Koristi switch da ispišeš "Jedan" ako je vrednost 1.
 */

let number = 1;
let value;

switch (number) {
    case 1: value = 'jedan'; break;
    case 2: value = 'dva'; break;
    case 3: value = 'tri'; break;
    case 4: value = 'cetiri'; break;
    case 5: value = 'pet'; break;
    case 6: value = 'sest'; break;
    case 7: value = 'sedam'; break;
    case 8: value = 'osam'; break;
    case 9: value = 'devet'; break;
    case 10: value = 'deset'; break;
    default : value = 'nepoznato'; break;
}
console.log(value);

/**
 * 2. Napravi varijablu ocena = 5.
 * Koristi switch da ispišeš "Odličan" ako je ocena 5.
 */

let grade = 5;
let gradeName;

switch (grade) {
    case 1: gradeName = 'Nedovoljan'; break;
    case 2: gradeName = 'Dovoljan'; break;
    case 3: gradeName = 'Dobar'; break;
    case 4: gradeName = 'Vrlo dobar'; break;
    case 5: gradeName = 'Odlican'; break;
    default: gradeName = 'Nepoznato'; break;
}
console.log(gradeName);

/**
 * 3. Napravi varijablu dan = 3.
 * Koristi switch da ispišeš "Sreda" ako je vrednost 3.
 */

let day = 3;
let dayName;

switch (day) {
    case 1: dayName = 'Monday';
        break;
    case 2: dayName = 'Tuesday';
        break;
    case 3: dayName = 'Wednesday';
        break;
    case 4: dayName = 'Thursday';
        break;
    case 5: dayName = 'Friday';
        break;
    case 6: dayName = 'Saturday';
        break;
    case 7: dayName = 'Sunday';
        break;
    default: dayName = 'Invalid day';
}
console.log(dayName);

/**
 * 4. Napravi varijablu mesec = 12.
 * Koristi switch da ispišeš "Decembar" ako je vrednost 12.
 */

let month = 12;
let monthName;
switch (month) {
    case 1: monthName = 'January'; break;
    case 2: monthName = 'February'; break;
    case 3: monthName = 'March'; break;
    case 4: monthName = 'April'; break;
    case 5: monthName = 'May'; break;
    case 6: monthName = 'June'; break;
    case 7: monthName = 'July'; break;
    case 8: monthName = 'August'; break;
    case 9: monthName = 'September'; break;
    case 10: monthName = 'October'; break;
    case 11: monthName = 'November'; break;
    case 12: monthName = 'December'; break;
    default : monthName = 'Unknown'; break;
}
console.log(monthName);

/**
 * 5. Napravi varijablu statusKod = 2.
 * Koristi switch da ispišeš "Uspeh" ako je kod 2.
 */

let statusCode = 2;
let statusMessage;

switch (statusCode) {
    case 1: statusMessage = 'Failed'; break;
    case 2: statusMessage = 'Succeeded'; break;
    default: statusMessage = 'Unknown'; break;
}
console.log(statusMessage);

/**
 * 6. Napravi varijablu boja = "crvena".
 * Koristi switch da ispišeš "Stop" ako je boja "crvena".
 */

let color = 'red';
let warningCase;

switch (color) {
    case 'red': warningCase = 'Stop'; break;
    case 'yellow': warningCase = 'Prepare'; break;
    case 'green': warningCase = 'Go'; break;
    default : warningCase = 'Unknown'; break;
}
console.log(warningCase);

/**
 * 7. Napravi varijablu jezik = "JS".
 * Koristi switch da ispišeš "JavaScript" ako je "JS".
 */

let language = 'JS';
let message;

switch (language) {
    case 'JS': message = 'JavaScript'; break;
    case 'CSS': message = 'CSS'; break;
    case 'PHP': message = 'PHP'; break;
    default: message = 'Unknown'; break;
}
console.log(message);

/**
 * 8. Napravi varijablu uloga = "admin".
 * Koristi switch da ispišeš "Admin pristup" ako je "admin".
 */

let role = 'admin';
let message2;

switch (role) {
    case 'admin': message2 = 'Admin pristup'; break;
    case 'user': message2 = 'User pristup'; break;
    default: message2 = 'Nepoznato'; break;
}
console.log(message2);

/**
 * 9. Napravi varijablu grad = "Beograd".
 * Koristi switch da ispišeš "Glavni grad" ako je "Beograd".
 */

let city = 'Beograd';
let capitol;

switch (city) {
    case 'Beograd': capitol = 'Glavni grad'; break;
    case 'Pristina': capitol = 'Nije glavni grad'; break;
    default: capitol = 'Nepoznato'; break;
}
console.log(capitol);

/**
 * 10. Napravi varijablu status = "online".
 * Koristi switch da ispišeš "Korisnik aktivan" ako je "online".
 */

let status = 'online';
let statusInfo;

switch (status) {
    case "online": statusInfo = 'Korisnik aktivan'; break;
    default: statusInfo = 'Unknown'; break;
}
console.log(statusInfo);