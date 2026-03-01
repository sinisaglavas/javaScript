/**
 * Napraviti funkciju calculateTax (izracunaj porez)
 * Imace dva parametra: amount, tax
 * Na pr: 500, 20% -> 500+100=600
  */

function calculateTax(amount, tax = 0.15)
{
    let total = amount + amount * tax;
    console.log(total);
}

calculateTax(500);


/**
 * return - da funkcija vrati rezultat koji je iskalkulisala
 * Funkcija moze vratiti bilo kakav postojeci podatak (boolean, string, integer, decimal...)
 */

// Opcione parametre UVEK treba pozicionirati na poslednje mesto i preferira se da postoji samo jedan
function getFullName(firstName, lastName, middleName = '') {
    return firstName + ' ' + middleName + ' ' + lastName; // ovde dodatna varijabla nije potrebna - direktno u return
}

let sinisa = getFullName('Sinisa', 'Glavas');
console.log(sinisa);

function statesTax(amount, tax = 0.20)
{
    return amount + amount * tax;
}

smokesTax = statesTax(200);
smokesTax = smokesTax * 2; // ovde mozemo da manipulisemo sa vrednoscu

console.log(smokesTax);

