// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle("dark-mode");
  const dark_img = document.querySelector(".dark_img");
  const modeBtn = document.querySelector("#mode");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
    dark_img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.6)"; // Apply shadow in dark mode
    modeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    dark_img.style.boxShadow = ""; // Remove shadow in light mode
    modeBtn.textContent = "🌙";
  }
}

// Function to load theme preference from local storage
function loadThemeFromLocalStorage() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    document.querySelector(".dark_img").style.boxShadow =
      "0 4px 8px rgba(0, 0, 0, 0.6)";
    document.querySelector("#mode").textContent = "☀️";
  }
}

// Button click event listener
document.querySelector("#mode").addEventListener("click", function () {
  toggleDarkMode();
});

// Load theme preference from local storage on page load
loadThemeFromLocalStorage();

// GSAP Animations
gsap.set("#side_bar", { x: -350 });
gsap.set(".navbar", { y: -50 });
gsap.set(".img_div", { opacity: 0 });
gsap.set(".right_div", { x: 200, opacity: 0 });

gsap.to(".navbar", { y: 10, duration: 2, delay: 0.3 });
gsap.to("#side_bar", { x: 0, duration: 2, delay: 0.2 });
gsap.to(".img_div", { opacity: 1, duration: 3, delay: 3 });
gsap.to(".right_div", { opacity: 1, x: 0, delay: 3.5, duration: 2 });
