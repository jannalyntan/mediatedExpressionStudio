// --------------------------------------------------
// To open and close the window
// --------------------------------------------------

const closeBtn = document.querySelector("#close-btn");
console.log(closeBtn);

function openWindow() {
  win.classList.add("open");
}

function closeWindow() {
  win.classList.remove("open");
}

closeBtn.addEventListener("click", closeWindow);

// --------------------------------------------------
// Select Folder
// --------------------------------------------------

// About Me

const aboutMeContent = document.querySelector("#about-me-content");
const aboutMeFile = document.querySelector("#about-me-file");
const aboutMetitle = document.querySelector("#about-me-title");

aboutMeFile.addEventListener("click", () => {
  win.classList.add("open");
  aboutMeContent.classList.remove("hidden");
  aboutMetitle.classList.add("active");
  console.log("yes");
});

// Assignment 1

const ass1Content = document.querySelector("#ass-1-content");
const ass1File = document.querySelector("#ass-1-file");
const ass1title = document.querySelector("#ass-1-title");

ass1File.addEventListener("click", () => {
  win.classList.add("open");
  ass1Content.classList.remove("hidden");
  ass1title.classList.add("active");
});

// Drag the window by its titlebar
const win = document.getElementById("finder-win");
const bar = document.getElementById("win-titlebar");
let dx,
  dy,
  dragging = false;

bar.addEventListener("mousedown", (e) => {
  dragging = true;
  dx = e.clientX - win.offsetLeft;
  dy = e.clientY - win.offsetTop;
  win.style.transform = "none"; // disable centering once moved
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  win.style.left = e.clientX - dx + "px";
  win.style.top = e.clientY - dy + "px";
});

document.addEventListener("mouseup", () => {
  dragging = false;
});
