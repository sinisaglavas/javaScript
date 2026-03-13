# NPM - Node Package Manager
Posle instalacije Node.js na racunaru restartujemo racunar
ili ako je bio ukljucen webStorm ponovo ga ukljucimo
Zatim u terminalu ukucamo: npm init gde mozemo uneti neke podatke za na primer autor: Sinisa Glavas ali nije obavezno
i odmah se kreira fajl: package.json

## Uloga NPM
- Upravljanje zavisnostima: Automatski instalira, ažurira i uklanja biblioteke i pakete koji su potrebni za
  funkcionisanje projekta.
- Centralizovano skladište (Registri): Omogućava pristup ogromnoj bazi javnih i privatnih JavaScript paketa.
- Upravljanje verzijama: Putem datoteke package.json,
  npm osigurava da svi članovi tima koriste iste verzije biblioteka, što sprečava greške.
- Automatizacija skripti: Može pokretati prilagođene skripte (npr. za testiranje, izgradnju ili pokretanje aplikacije).
- Ukratko, npm znatno ubrzava razvoj JavaScript aplikacija
  jer programerima omogućava lako preuzimanje i integraciju tuđeg koda, umesto pisanja svega od nule.

## Instaliranje nove biblioteke koja se zove Terser -> svrha da izmedju svega radi minifikaciju fajlova
- pretvori kod u single line. Znaci da kod bude mnogo manje citljiv i razumljiv drugima koji ga vide preko sajta
- Kucamo u terminalu: npm install --save-dev terser
- Posle ovoga vidimo da se u korenu projekta pojavio novi folder: node_modules i takodje fajl: package-lock.json
- Folder node_modules se NIKADA ne salje nikome. Taj folder moze biti ogroman u GB. On cuva sve vezano za nasu npm konfiguraciju.
- Kada instaliramo jedan paket oni mogu po inerciji da instaliraju jos nekoliko drugih paketa koji su njima potrebni.

## Razlika izmedju package.json i package-lock.json?
- package.json -> ono sto konfigurisemo u smislu treba mi ovaj paket sa ovom verzijom
- package-lock.json -> je detaljan niz stvari koji su njemu potrebne da rade

### Ako vidimo da neki paketi ne rade obrisemo node_modules i package-lock.json i pokrenemo u terminalu: npm install