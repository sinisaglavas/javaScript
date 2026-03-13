
/**
 * 22.13 Webpack Build.mp4
 * Sada u package.json treba da dodamo da on koristi webpack
 * I dodamo:
 * "main": "script.mjs",
 *   "scripts": {
 *     "test": "echo \"Error: no test specified\" && exit 1",
 *     "build": "webpack" -> dodata linija koda koja kaze da kada pokrenemo build to treba da bude webpack
 *     "watch": "webpack --watch" -> takodje mozemo dodati watch (koji mnogo brze prati promene u kodu) preko webpack
 *   },
 *
 *  Kada god radimo sa webpack-om POKRENIMO 'npm run watch' neka trci u pozadini
 *
 *   Ove stvari koje smo uradili cemo JEDNOM konfigurisati na projektu i svaki put posle toga uglavnom COPY/PASTE
 *
 *   Sada da bismo ovo pokrenuli ide komanda: npm run build
 *   Tako da smo na ovaj nacin bildujemo u folderu 'dist' taj fajl
 *   dist i node_modules se ne salju nigde i nikome
 */

/**
 * 22.17 Import
 * Ovo znaci da mozemo imati vise fajlova gde se desavaju stvari i mogu da izdvajam logiku pa da sve ucitavam u jednom fajlu (na primer script.mjs)
 * Ako ucitavamo neki fajl u script.mjs nemamo potrebe da ga ubacujemo u webpack.config.js jer ga ucitavamo preko import-a u script.mjs
 */

import { sayHello } from './user.mjs' // ucitaj user.mjs

sayHello();

/**
 * 22.18 Faker -> Biblioteka za prikaz laznih podataka
 * U terminalu kucamo: npm install @faker-js/faker
 * Posle instalacije kucamo kod:
 */

import { faker } from '@faker-js/faker'

console.log(faker.person.fullName());
