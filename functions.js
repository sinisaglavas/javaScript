/**
 * Functions -> Methods
 * Methods: array.find(), console.log()
 * Funkcije i metode
 *
 *
 * function -> kada kreiramo ili pravimo funkciju
 * imeFunkcije -> ista pravila kao za varijable (!@%^#,.12313213)
 * () -> funkcije bez argumenata
 * (ime, prezime) -> funkcije sa argumentima
 * return -> kasnije ce biti objasnjeno
 *
 * Svaka funkcija (kao i if) mora imati svoje zagrade {}
 * -> Unutar {} se nalazi kod koji ce se izvrsiti
 */

function sayHello()
{
    console.log('Hello!');
}
sayHello(); // pozivanje funkcije - vidimo ispis 'Hello!' u konzoli

/**
 * Napraviti funkciju online -> funkcija treba da ispise poruku sajt je online
 */

function online()
{
    console.log('Site is online!');
}
online();

/**
 * isAdult -> Da li osoba ima 18 godina -> ako ima 'Adult', ako nema 'Not adult'
 * isFree, isAdult, isCar, isHuman -> da li je nesto tacno ili nije -> prefix sa is
 * ako ta funkcija setuje setMoney, setName, setLastname -> prefix sa set
 * getMoney, getName -> prefix sa get (da vrati koliko osoba ima necega)
 */

function isAdult(age)
{
    if (age >= 18) {
        console.log('Ova osoba je odrasla.');
    } else {
        console.log('Ova osoba nije odrasla.');
    }

}

let sinisa = 99;

isAdult(18);
isAdult(sinisa);
isAdult(14);

function writeFullName(firstName, lastName)
{
    console.log(firstName + ' ' + lastName);
}

writeFullName('Sinisa', 'Glavas');