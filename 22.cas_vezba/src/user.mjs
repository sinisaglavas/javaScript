/**
 * Kako cemo pozvati ovu funkciju unutar script.mjs ?
 * Prvo treba da ispred funkcije stavimo export -> funkcija moze biti pozvana iz drugih fajlova
 * Ako hocu da je pozovem iz script.mjs (idem u script.mjs) i pisem:
 * import { sayHello } from './user.mjs'
 * sayHello();
 *
 * Ovo znaci da mozemo imati vise fajlova gde se desavaju stvari i mogu da izdvajam logiku pa da sve ucitavam u jednom fajlu (na primer script.mjs)
 * Ako ucitavamo neki fajl u script.mjs nemamo potrebe da ga ubacujemo u webpack.config.js jer ga ucitavamo preko import-a u script.mjs
 * Promenio sam ekstenzije zbog bacanja greske u dva fajla: user.js → user.mjs i script.js → script.mjs
 */

export function sayHello() {
    console.log("Hello world from user.mjs");
}