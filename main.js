const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const scrollBtn = document.querySelector("#scroll-btn");
const features = document.querySelector("#features-container");
const featuresBtns = document.querySelector("#features-buttons");

// Navbar
document.addEventListener("click", (e) => {
  if (e.target.id === "menu-btn") {
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");
  }
  if (e.target.id !== "menu-btn") {
    btn.classList.remove("open");
    nav.classList.add("hidden");
    nav.classList.remove("flex");
  }
});

// Scroll to top
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("bg-white");
    scrollBtn.classList.remove(".scrollTopHide");
    scrollBtn.classList.add("scrollTopShow");
  } else {
    scrollBtn.classList.remove("scrollTopShow");
    scrollBtn.classList.add(".scrollTopHide");
    navbar.classList.remove("bg-white");
  }
});

// Features

featuresBtns.addEventListener("click", (e) => {
  features.classList.remove("features-container");
  void features.offsetWidth;
  features.classList.add("features-container");
  switch (e.target.id) {
    case "coctail":
      coctail();
      break;
    case "service":
      service();
      break;
    case "carPark":
      carPark();
      break;
    case "liveActions":
      liveActions();
      break;
    default:
      return;
  }
});

function coctail() {
  document.querySelector("#features-container h2").innerHTML = "Coctail";
  document.querySelector(
    "#features-container p"
  ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis
  odio
  pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
  repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelector("#features-container img").src =
    "images/cocktails.jpg";
}

function service() {
  document.querySelector("#features-container h2").innerHTML = "Service";
  document.querySelector(
    "#features-container p"
  ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis
      odio
      pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
      repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelector("#features-container img").src = "images/service.jpg";
}

function carPark() {
  document.querySelector("#features-container h2").innerHTML = "Car Park";
  document.querySelector(
    "#features-container p"
  ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis
    odio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelector("#features-container img").src = "images/otopark.jpg";
}

function liveActions() {
  document.querySelector("#features-container h2").innerHTML = "Live Actions";
  document.querySelector(
    "#features-container p"
  ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis
    odio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelector("#features-container img").src =
    "images/liveActions.jpg";
}

// Gallery

const galleryImg = document.querySelector("#gallery-img");
const imgArr = [
  "./images/cocktail.jpg",
  "./images/gallery1.jpeg",
  "./images/cocktails.jpg",
  "./images/liveActions.jpg",
  "./images/otopark.jpg",
  "./images/service.jpg",
];

const gallery = document.querySelector("#gallery");
let index = 0;
gallery.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id === "prev") {
    index--;
    if (index < 0) {
      index = imgArr.length - 1;
    }
    galleryImg.src = imgArr[index];
  } else if (e.target.id === "next") {
    index++;
    if (index > imgArr.length - 1) {
      index = 0;
    }
    galleryImg.src = imgArr[index];
  } else if (e.target.id === "gallery-img") {
    const imageDiv = document.createElement("div");
    imageDiv.innerHTML = `<img src="${galleryImg.src}" alt="image" />`;
    imageDiv.classList.add("image-div");
    gallery.appendChild(imageDiv);
    imageDiv.addEventListener("click", () => {
      imageDiv.remove();
    });
  }
});
