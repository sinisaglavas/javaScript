/**
 * Local Storage NIJE sigurna opcija da se u njemu cuvaju osetljivi podaci.
 * Uloga local storage-a jeste da zapamti podatke posle refresh-a stranice. Na primer ako imamo nalog na stranci gde smo ulogovani,
 * posle refresh-a te stranice smo jos uvek ulogovani jer u local storage su podaci koji pamte da ste ulogovani.
 *
 * Postoji mnogo primera LS, na primer ako odemo na neki sajt pitaju nas da li zellimo da prihvatimo kolacice ako zelimo tu se isto koristi LS.
 * Kolicina podataka koji se koriste (cuva) u LS zavisi od sajta do sajta.
 * Mi kozemo videti sta se sve cuva u LS tako sto odemo na desni klik na sajtu idemo na inspect.
 * Zatim idemo na deo 'Application' pa idemo na 'Local Storage' gde vidimo sajtove na kojima se cuvaju neki podaci.
 *
 * Znaci LS nam sluzi kako bismo mi sacuvali trajno neke podatke. Nema veze ako mi odemo sa tog sajta i posle se vratimo ti podaci su jos uvek prisutni.
 * Nacin na koji se radi sa LS je jako lagan.
 * Kod LS imamo 2. stvari: key i value. Vrednost moze biti 'string', 'integer', 'boolean'.
 * Ako hocemo nesto vece od toga moze biti 'float', ali ne moze biti 'array' mada ga mozemo pretvoriti u JSON i onda ga cuvati kao array.
 */

localStorage.setItem('name', 'Sinisa');

/**
 * Kada kliknemo na 'Uloguj' se mi treba da proverimo da li je korisnik uneo dobre kredencijale:
 * username= admin;
 * password = 123456;
 * Ako korisnik unese ove podatke, onda trebamo da upisemo u LS 'loggedIn = true', kako bismo znali da li je ulogovan ili ne
 * Poenta LS je da je uvek vezan za sajt na kome su uneti bilo koji podaci. Podaci su uvek tamo sve dok ih mi ne obrisemo.
 */

const loggedIn = localStorage.getItem('loggedIn');

if (loggedIn === null) {
    document.getElementById('loginForm').style.display = 'block';
} else {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loggedInData').style.display = 'block';
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.reload();
})

document.getElementById('loginBtn').addEventListener('click', () => {
    const admin = document.getElementById('userName').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    if (admin !== 'admin' || password !== '123456') {
        return alert('Niste uneli dobre podatke!');
    }

    localStorage.setItem('loggedIn', 'true');
    window.location.reload();

})