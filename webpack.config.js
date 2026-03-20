

const path = require('path'); // ovo je potrebno (preko node.js) da bi imao putanju do fajlova
const Dotenv = require('dotenv-webpack'); // (24.cas) mi ucitavamo dotenv i zatim kreiramo fajl '.env' u korenu projekta u kom pisemo velikim slovima

module.exports = { // kako bi on video sve fajlove izvan ovog fajla

    mode: 'production', // mode production -> automatski minifikuje fajlove i kada izbacimo fajlove na server
    entry: './src/script.mjs', // gde se nalazi taj nas js fajl koji zelimo da ucitamo (mozemo staviti vise fajlova -> pretvoriti u array)

    output: { // izlazni fajl koji zelimo da imamo
        filename: 'script.min.js', // ili bundle.min.js
        path: path.resolve(__dirname, 'dist'), // moramo mu reci koja je putanja do 'dist' foldera (lokacija u korenu projekta)
        // dist folder -> 'distribution' je folder koji drzi zadnje fajlove koji se citaju u browser-u
    },
    plugins: [ // dodato u 24.casu posle instalacije: npm install --save-dev dotenv dotenv-webpack
        new Dotenv() // ucitavamo dotenv - stavljamo ovde da je dostupan uvek i kada pokrenemo watch ili build komandu on treba da ga ucita, pa probamo:npm run watch
    ]
}