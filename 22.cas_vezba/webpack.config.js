
// 22.12 Webpack Config.mp4

const path = require('path'); // ovo je potrebno (preko node.js) da bi imao putanju do fajlova

module.exports = { // kako bi on video sve fajlove izvan ovog fajla

    mode: 'production', // mode production -> automatski minifikuje fajlove i kada izbacimo fajlove na server
    entry: [ // gde se nalazi taj nas js fajl koji zelimo da ucitamo (mozemo staviti vise fajlova -> pretvoriti u array)
        './src/script.mjs',
        './src/functions.js'
    ],
    output: { // izlazni fajl koji zelimo da imamo
        filename: 'script.min.js', // ili bundle.min.js
        path: path.resolve(__dirname, 'dist'), // moramo mu reci koja je putanja do 'dist' foldera
        // dist folder -> 'distribution' je folder koji drzi zadnje fajlove koji se citaju u browser-u
    }
}