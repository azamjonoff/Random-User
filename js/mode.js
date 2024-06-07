const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  body.classList.add("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
}

const toggleModeBtn = (bodyTog) => {
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  //   lightBtn.classList.remove("hidden");
  //   darkBtn.classList.add("hidden");
  //   body.classList.add("dark-mode");
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  //   lightBtn.classList.add("hidden");
  //   darkBtn.classList.remove("hidden");
  //   body.classList.remove("dark-mode");
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
