// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log("main node", body.querySelector("main"));

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
console.log("body node", ul.parentElement.parentElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const previousSibling = p.previousElementSibling;
console.log("3rd list item", previousSibling.querySelectorAll("li")[2]);
