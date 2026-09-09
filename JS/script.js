let images = [
  "images/mp1.jpeg",
  "images/mp2.jpeg",
  "images/mp3.jpeg",
  "images/mp4.jpeg",
];

let i = 0;

setInterval(function () {
  let slider = document.getElementById("slider");
  slider.style.transform = "translateX(-100%)";

  setTimeout(function () {
    i++;
    if (i >= images.length) {
      i = 0;
    }
    slider.style.transition = "none";
    slider.style.transform = "translateX(100%)";
    slider.src = images[i];

    setTimeout(function () {
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = "translateX(0)";
    }, 50);
  });
}, 2000);

function clock() {
  let date = new Date();
  let options = { day: "2-digit", month: "short", year: "numeric" };
  let formattedDate = date.toLocaleDateString("en-GB", options);

  document.getElementById("clock").innerHTML = formattedDate;
}
clock();
