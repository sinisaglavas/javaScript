/**
 * 1. Napravi varijablu temperatura = 28. Koristi if da ispišeš "Vruće" ako je >25,
 *  "Umereno" ako je između 15 i 25, "Hladno" ako je <15.
 */

 let temperature = 20;

 if (temperature > 25) {
     console.log('Vruce');
 } else if (temperature > 15 && temperature <= 25) {
     console.log('Umereno');
 } else if (temperature < 15) {
     console.log('Hladno');
 }

 /**
  * 2. Napravi niz poeni = [45, 78, 90, 62]. Koristi for + if da ispišeš "Položio" za
  * poene >=60 i "Nedovoljno" za ostale.
 */

 let points = [45, 78, 90, 62];
 for (let i = 0; i < points.length; i++) {
     if (points[i] > 60) {
         console.log(points[i] + ' = Polozio');
     } else {
         console.log(points[i] + ' = Nedovoljno');
     }
 }

 /**
  * 3. Napravi niz brojevi = [1,2,3,4,5,6,7,8,9,10]. Koristi for loop da ispišeš
  *  samo brojeve deljive sa 3.
 */

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 3 === 0) {
         console.log(numbers[i]);
     }
 }

 /**
  * 4. Napravi niz imena = ["Ana","Marko","Jovan","Ivana"]. Koristi for + if da
  * ispišeš imena koja imaju 4 ili više karaktera.
 */

     let names = ['Ana', 'Marko', 'Jovan', 'Ivana'];
     for (let i = 0; i < names.length; i++) {
         if (names[i].length >= 4) {
             console.log(names[i]);
         }
     }

 /**
  * 5. Napravi varijablu godina = 2026. Koristi if da proveriš da li je godina prestupna.
 */

 let year = 2026;
 if (year % 4 === 0) {
     console.log('Godina je prestupna');
 } else {
     console.log('Godina nije prestupna');
 }

 /**
  * 6. Napravi niz ocene = [5,4,3,2,1]. Koristi for loop da prebrojiš koliko je ocena 2.
  */

 let grades = [5, 4, 3, 2, 1];
 let gradeNumber = 0;
 for (let i = 0; i < grades.length; i++) {

     if (grades[i] === 2) {
         gradeNumber += 1;
     }
 }
 console.log('Ukupno ocena 2: ' + gradeNumber);

/**
 * 7. Napravi varijablu dan = "subota". Koristi switch da ispišeš "Vikend" ili "Radni
 * dan".
 */

let day = 'Saturday';
let action;
switch (day) {
    case 'Sunday': action = 'Weekend'; break;
    case 'Monday': action = 'Work day'; break;
    case 'Tuesday': action = 'Work day'; break;
    case 'Wednesday': action = 'Work day'; break;
    case 'Thursday': action = 'Work day'; break;
    case 'Friday': action = 'Work day'; break;
    case 'Saturday': action = 'Weekend'; break;
    default: action = 'Unknown'; break;
}
console.log(action);

/**
 * 8. Napravi niz statusi = ["online","offline","offline","online"]. Koristi
 * for + switch da ispišeš "Aktivan" ili "Nije aktivan" za svaki element.
 */

let statuses = ['online', 'offline', 'offline', 'online'];
for (let i = 0; i < statuses.length; i++) {
    let status;
    switch (statuses[i]) {
        case 'online': status = 'User is active'; break;
        case 'offline': status = "User isn't active"; break;
    }
    console.log(status);
}

/**
 * 9. Napravi niz brojevi = [5,8,12,3]. Koristi for loop da pronađeš najmanji broj.
 */

let numero = [5, 8, 12, 3];
let smallestNumber = numero[0];
for (let i = 0; i < numero.length; i++) {
    if (smallestNumber < numero[i]) {
        continue;
    }
    smallestNumber = numero[i];
}
console.log(smallestNumber);

/**
 * 10. Napravi niz ocene = [5,3,4,2,5]. Koristi for loop da sabereš sve ocene i ispišeš
 * zbir.
 */

let marks = [5, 3, 4, 2, 5];
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
console.log(total);