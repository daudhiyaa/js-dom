const close = document.querySelectorAll(".close");
close.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
