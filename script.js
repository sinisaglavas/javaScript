
// getElementById

/**
 * document -> HTML fajl unutar kog se ucitava script.js
 * document = index.html
 */

let name = prompt("What is your name?");
let textColor = prompt("Color input");
let backgroundColor = prompt("What is your background color?");

let marqueeElement = document.getElementById('name');

marqueeElement.style.color = textColor;
marqueeElement.style.backgroundColor = backgroundColor;
marqueeElement.innerText = name;

/**
 * getElementById -> prosledite ID dobijete element
 * getElementByClassName -> prosledite klasu i dobijete array sa elementom
 * querySelector -> "#name", ".name" -> vraca 1 element
 * querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */

