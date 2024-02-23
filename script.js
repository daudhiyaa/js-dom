const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();

    const atribute = img.getAttribute("src");
    jumbo.setAttribute("src", atribute);

    // FLASH ANIMATION
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    // REMOVE ACTIVE THUMBNAIL
    thumbs.forEach((img) => img.classList.remove("active"));

    // ACTIVE THUMBNAIL
    img.classList.add("active");
  });
});

// DARI PAK DHIKA
// const container = document.querySelector(".container");
// container.addEventListener("click", (e) => {
//   if (e.target.className == "thumb") {
//     jumbo.src = e.target.src;

//     // FLASH ANIMATION
//     jumbo.classList.add("fade");
//     setTimeout(() => {
//       jumbo.classList.remove("fade");
//     }, 500);

//     // ACTIVE THUMBNAIL
//     e.target.classList.add("active");
//   }
// });
