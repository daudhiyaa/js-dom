/* 
================ 
==== BUTTON ====
================ 
*/
const btnChangeColor = document.getElementById("btnChangeColor");
btnChangeColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

/* 
================ 
==== SLIDER ====
================ 
*/
const redSlider = document.querySelector("input[name=redSlider]");
const greenSlider = document.querySelector("input[name=greenSlider]");
const blueSlider = document.querySelector("input[name=blueSlider]");

redSlider.addEventListener("input", () => {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

greenSlider.addEventListener("input", () => {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

blueSlider.addEventListener("input", () => {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

/* 
================ 
==== CURSOR ====
================ 
*/
document.body.addEventListener("mousemove", (e) => {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
