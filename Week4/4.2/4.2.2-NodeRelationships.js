// select the root node
const body = document.querySelector("body");
console.log(body);
// select the last child of the root node
const lastChild = body.lastElementChild;
console.log(lastChild);
// select all the children of the body element
const allChild = body.children;
console.log(allChild);
// select the next sibling of the h2 node
const h2Node = document.querySelector("h2");
const nexSib = h2Node.nextElementSibling;
console.log(nexSib);
// select the parent element of the h1 node
const parElem = document.querySelector("h1");
const h1Parent = parElem.parentElement;
console.log(h1Parent);
