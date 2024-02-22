/*    
=======================   
==== EVENT HANDLER ====   
=======================   
*/
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

const changeColorP2 = () => {
  p2.style.backgroundColor = "lightblue";
};

const changeColorP3 = () => {
  p3.style.backgroundColor = "lightblue";
};

p2.onclick = changeColorP2;
p3.onclick = changeColorP3;

/*   
============================  
==== addEventListener() ====  
============================   
*/
const p4 = document.querySelector("section#b p");
p2.addEventListener("click", () => {
  const newList = document.createElement("li");
  const newListText = document.createTextNode("Item Baru");
  newList.appendChild(newListText);

  const ul = document.querySelector("section#c ul");
  ul.appendChild(newList);
});
