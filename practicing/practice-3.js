/**
 * 1. Napravi varijablu broj = 7. Koristi if da proveriš da li je broj veći od 5 i ispiši "Broj
 * je veći od 5".
 */
 let number = 7;
 if (number > 5) {
     console.log('Broj je veci od 5');
 }
 /**
  * 3. Napravi niz ocene = [5,3,4,2,5]. Koristi for loop i if da ispišeš samo ocene veće
  * ili jednake 4.
  */
 let grades = [5,3,4,2,5];
 for (let i = 0; i < grades.length; i++) {
     if (grades[i] >= 4) {
         console.log(grades[i]);
     }
 }
 /**
  * 4. Napravi niz brojevi = [1,2,3,4,5,6]. Koristi for loop i if da ispišeš samo parne
  * brojeve.
  */
 let numbers = [1,2,3,4,5,6];
 for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 === 0) {
         console.log(numbers[i]);
     }
 }
 /**
  * 5. Napravi niz imena = ["Ana","Marko","Jovan"]. Koristi for loop i if da ispišeš
  * samo imena koja počinju slovom "A".
  */
 let names = ['Ana', 'MArko', 'Jovan', 'Anabela'];
 for (let i = 0; i < names.length; i++) {
     if (names[i][0].toLowerCase() === 'a') {
         console.log(names[i]);
     }
 }
 /**
  * 6. Napravi niz gradovi = ["Beograd","Novi Sad","Niš"]. Koristi for loop i if da
  * ispišeš gradove sa više od 5 karaktera.
  */
 let cities = ['Beograd', 'Novi Sad', 'Nis'];
 for (let i = 0; i < cities.length; i++) {
     if (cities[i].length > 5) {
         console.log(cities[i]);
     }
 }
 /**
  * 7. Napravi varijablu dan = 3. Koristi switch da ispišeš ime dana (1 = Ponedeljak, 2 =
  * Utorak, 3 = Sreda...).
  */
 let day = 3;
 let dayName;

 switch (day) {
     case 0: dayName = 'Monday';
     break;
     case 1: dayName = 'Tuesday';
     break;
     case 2: dayName = 'Wednesday';
     break;
     case 3: dayName = 'Thursday';
     break;
     case 4: dayName = 'Friday';
     break;
     case 5: dayName = 'Saturday';
     break;
     case 6: dayName = 'Sunday';
     break;
     default: dayName = 'Invalid day';
 }
 console.log(dayName);
 /**
  * 8. Napravi varijablu boja = "zelena". Koristi switch da ispišeš "Kreni" ako je
  * zelena, "Stop" ako je crvena, "Pažnja" ako je žuta.
  */
 let color = 'yellow';
 let action;

 switch (color) {
     case 'green': action = 'Go'; break;
     case 'yellow': action = 'Attention'; break;
     case 'red': action = 'Stop'; break;
     default: action = 'Unknown'; break;
 }
 console.log(action);
 /**
  * 9. Napravi niz statusi = ["online","offline","online"]. Koristi for + switch
  * da ispišeš "Korisnik aktivan" ili "Korisnik nije aktivan".
  */
 let statuses = ['online', 'offline', 'online'];
 for (let i = 0; i < statuses.length; i++) {
     let status;
     switch (statuses[i]) {
         case 'online': status = 'User is online'; break;
         case 'offline': status = 'User is offline'; break;
     }
     console.log(status);
 }
 /**
  * 10. Napravi varijablu broj = 10. Koristi if da proveriš da li je paran ili neparan i ispiši
  * "Paran" ili "Neparan".
  */
 let numero = 10;
 if (numero % 2 === 0) {
     console.log('Even');
 } else {
     console.log('Odd');
 }