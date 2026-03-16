function selectFolder() {
  document
    .getElementById("folder-1")
    .parentElement.closest(".folder").style.background =
    "rgba(100,150,255,0.25)";
}

// To open and close the window
const closeBtn = document.querySelector("#close-btn");
console.log(closeBtn);

const win = document.getElementById("finder-win");
console.log(win);

function openWindow() {
  win.classList.add("open");
}

function closeWindow() {
  win.classList.remove("open");
}
closeBtn.addEventListener("click", closeWindow);

// Select Folder
const aboutMeContent = document.querySelector("#about-me-content");
const aboutMeFile = document.querySelector("#folder-1");

aboutMeFile.addEventListener("click", openWindow);

// Drag the window by its titlebar
// const win = document.getElementById("finder-win");
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
