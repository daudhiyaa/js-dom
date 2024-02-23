const close = document.querySelectorAll(".close");
close.forEach((e) => {
  e.addEventListener("click", function (e) {
    /* ==== DOM TRAVERSAL ==== */
    e.target.parentElement.style.display = "none";

    /* ==== PREVENT DEFAULT ==== */
    e.preventDefault();

    /* ==== HANDLING EVENT BUBBLING ==== */
    e.stopPropagation();
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", function () {
    alert("ok");
  });
});

// 2nd Method
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
