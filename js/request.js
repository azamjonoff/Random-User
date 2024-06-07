// const { log } = require("console");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

// loader function

const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const reload = () => {
  fetch(API)
    .then((data) => {
      loaderToggle(true);
      return data.json();
    })
    .then((dataJson) => {
      uptadeUI(dataJson.results);
      loaderToggle(false);
    })
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", reload);
