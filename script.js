function selectFolder() {
  document
    .getElementById("folder-1")
    .parentElement.closest(".folder").style.background =
    "rgba(100,150,255,0.25)";
}

function openWindow() {
  document.getElementById("finder-win").classList.add("open");
}

function closeWindow() {
  document.getElementById("finder-win").classList.remove("open");
}

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
