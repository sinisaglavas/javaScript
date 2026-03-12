/**
 * Vežbe – DOM (querySelector,
 * getElementById,
 * getElementsByClassName, innerText,
 * innerHTML)
 *
 * 1. Napravi HTML element <p id="paragraf1">Hello</p> i pomoću
 * getElementById ispiši njegov tekst u konzoli.
 */

let paragraph = document.getElementById('paragraph');
console.log(paragraph.textContent);


/**
 * 2. Napravi HTML element <p class="tekst">JavaScript</p> i pomoću
 * getElementsByClassName ispiši tekst u konzoli.
 */

let text = document.getElementsByClassName('text');
console.log(text[0].textContent);

/**
 * 3. Napravi HTML element <h1 id="naslov">Naslov</h1> i pomoću
 * querySelector("#naslov") promeni tekst u "Novi Naslov".
 */

let title = document.querySelector('#title');
title.innerText = 'New title';

/**
 * 4. Napravi HTML <div class="box">Stari sadržaj</div> i pomoću
 * querySelector(".box") promeni innerText u "Novi sadržaj".
 */

let box = document.querySelector('.box');
box.innerText = 'New content';

/**
 * 5. Napravi HTML <p id="par1">Test</p> i promeni innerHTML u <strong>Bold
 * Test</strong>.
 */

let par1 = document.getElementById('par1');
par1.innerHTML = '<strong>Bold Test</strong>';

/**
 * 6. Napravi dva HTML elementa <p class="item">Prvi</p> i <p
 * class="item">Drugi</p>.
 * Koristi getElementsByClassName da promeniš tekst prvog elementa u "Prvi
 * Promenjen".
 */

let item = document.getElementsByClassName('item');
item[0].textContent = 'First changed';

/**
 * 7. Napravi HTML <div id="glavni">Stari div</div> i pomoću getElementById
 * dodaj novi tekst "Dodato" na postojeći tekst.
 */

let main = document.getElementById('main');
main.innerText += ' Dodato';

/**
 * 8. Napravi HTML <ul><li class="lista">Jabuka</li><li
 * class="lista">Banana</li></ul> i pomoću getElementsByClassName
 * promeni drugi <li> u "Kruška".
 */

let list = document.getElementsByClassName('lista');
list[1].innerHTML = 'Kruska';

/**
 * 9. Napravi HTML <p class="para">Hello</p> i pomoću querySelector promeni
 * boju teksta na crveno (style.color = "red").
 */

let para = document.querySelector('.para');
para.style.color = 'red';

/**
 * 10. Napravi HTML <div id="box">Stari</div> i pomoću innerHTML ubaci <p>Novi
 * paragraf</p>.
 */

let boxElement = document.querySelector('#box');
let paragraphElement = document.createElement('p');
paragraphElement.innerText = 'Novi paragraf';

boxElement.innerHTML = '';
boxElement.appendChild(paragraphElement);
console.log(boxElement);
