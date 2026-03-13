
let name = 'Sinisa';
let age = 100;
let gender = 'male';
let professors = ['male', 'female', 'male'];
let programming = true;
let admin = false;

console.log(name, age, gender, professors, programming, admin);


/*
Da bismo kreirali minifikovanu (kompresovanu) verziju koja ce se izvrsavati u browser-u.
Pisemo u terminalu: npx terser script.js -o script.min.js
-> zelimo da iz script.js pretvori minifikuje kod u script.min.js (-o znaci output)
Ova komanda bi trebalo stalno da se ponavlja pri dodavanju novog koda. A to se cesto zaboravlja.
Zato cemo dodati biblioteku 'watch' koja to radi umesto nas.
npm install --save-dev watch -> instalira u projektu
nmp install -g watch -> instalira globalno u nasem racunaru
Posle instalacije moramo napraviti skriptu ili komandu koja ce raditi u pozadini:
U terminalu: npx watch "npx terser script.js -o script.min.js"
Posle ove komande bi trebao da sam dodaje sve promene u kodu na script.min.js
Da ugasimo komandu: kliknemo unutar terminala ctrl+C, zatim odgovorimo sa Y i enter
Da ne bismo komandu npx terser script.js -o script.min.js morali uvek kucati mozemo kreiratu alias za nju unutar fajla package.json:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch-terser": "npx watch \"npx terser script.js -o script.min.js\" " -> ovu liniju smo dodali
    }
Kreirana komanda se pokrece: npm run watch-terser

Zatim u index.html pozovemo <script src="script.min.js"></script>
 */