// getElementById
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";

// getElementsByTagName
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// getElementsByClassName
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

// querySelector
const p4 = document.querySelector("#b p");

// querySelectorAll
const pAll = document.querySelectorAll("p");

// example
const sectionB = document.getElementById("b");
const paragraph4 = sectionB.querySelector("p");
paragraph4.style.backgroundColor = "orange";

// ========================== //
// ==== DOM MANIPULATION ==== //
// ========================== //
const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "<div><h1>Hello World</h1></div>";
sectionA.style.backgroundColor = "lightgreen";

sectionA.setAttribute("attributeKey", "attributeValue");
sectionA.getAttribute("attributeKey");
sectionA.removeAttribute("attributeKey");

sectionA.classList.add("className");
sectionA.classList.remove("className");
sectionA.classList.toggle("className"); // if exist, remove, if not, add
sectionA.classList.item(0); // check by index
sectionA.classList.contains("className"); // return true or false
sectionA.classList.replace("oldClassName", "newClassName");
