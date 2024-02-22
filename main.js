/* 
======================= 
==== DOM SELECTION ====
=======================
*/

/* getElementById */
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";

/* getElementsByTagName */
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

/* getElementsByClassName */
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

/* querySelector */
const p4 = document.querySelector("#b p");

/* querySelectorAll */
const pAll = document.querySelectorAll("p");

// example
const sectionB = document.getElementById("b");
const paragraph4 = sectionB.querySelector("p");
paragraph4.style.backgroundColor = "orange";

/* 
========================== 
==== DOM MANIPULATION ====
==========================
*/

/* ELEMENT MANIPULATION */

// innerHTML & style.<property>
const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "<div><h1>Hello World</h1></div>";
sectionA.style.backgroundColor = "lightgreen";

// <method>Attribute
sectionA.setAttribute("attributeKey", "attributeValue");
sectionA.getAttribute("attributeKey");
sectionA.removeAttribute("attributeKey");

// classList.<method>
sectionA.classList.add("className");
sectionA.classList.remove("className");
sectionA.classList.toggle("className"); // if exist, remove, if not, add
sectionA.classList.item(0); // check by index
sectionA.classList.contains("className"); // return true or false
sectionA.classList.replace("oldClassName", "newClassName");

/* NODE MANIPULATION */

// create new element
const newParagraph = document.createElement("p");
const newParagraphText = document.createTextNode("Paragraf Baru");

// append text to element
newParagraph.appendChild(newParagraphText);

// append element to parent
const sectionC = document.getElementById("c");
sectionC.appendChild(newParagraph);

const newList = document.createElement("li");
const newListText = document.createTextNode("Item Baru");
newList.appendChild(newListText);

const ul = document.querySelector("section#c ul");
const li2 = ul.querySelector("li:nth-child(2)");

// insert a node before a node
ul.insertBefore(newList, li2);

// remove child node
const a = document.getElementsByTagName("a")[0];
sectionA.removeChild(a);

// replace child node
sectionA.replaceChild(newNode, oldNode);
