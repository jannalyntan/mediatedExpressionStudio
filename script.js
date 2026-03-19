// --------------------------------------------------
// To open and close the window
// --------------------------------------------------

const closeBtn = document.querySelector("#close-btn");
console.log(closeBtn);

const win = document.getElementById("finder-win");
const folder = document.getElementById("folder");

function openWindow(tabId) {
  win.classList.add("open");
  switchTab(tabId);
}

function closeWindow() {
  win.classList.remove("open");
}

closeBtn.addEventListener("click", closeWindow);

// --------------------------------------------------
// Finder
// --------------------------------------------------

const winContents = document.querySelectorAll(".win-content");
const sidebarRows = document.querySelectorAll(".sidebar-row");

switchTab("about-me");

function switchTab(tabId) {
  sidebarRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.tab === tabId);
  });

  winContents.forEach((tab) => {
    tab.classList.toggle("active", tab.id === "tab-" + tabId);
  });

  // update the title bar text to match the active tab
  const activeRow = document.querySelector(`.sidebar-row[data-tab="${tabId}"]`);
  if (activeRow) {
    document.getElementById("win-title-text").textContent =
      activeRow.textContent.trim();
  }
}

sidebarRows.forEach((row) => {
  row.addEventListener("click", () => switchTab(row.dataset.tab));
});

// --------------------------------------------------
// Files
// --------------------------------------------------

function selectFolder(e, id) {
  e.stopPropagation();
  document
    .querySelectorAll(".folder")
    .forEach((f) => f.classList.remove("selected"));
  document.getElementById(id).classList.add("selected");
}

// --------------------------------------------------
// Time and Date
// --------------------------------------------------

// Google this feature and then changed it a bit for the calender date
function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();

  const ampm = h >= 12 ? "PM" : "AM";
  const formattedTime =
    (h % 12 || 12) + ":" + String(m).padStart(2, "0") + " " + ampm;

  document.getElementById("time").textContent = formattedTime;
}
updateClock();
setInterval(updateClock, 20000);

function updateDate() {
  const date = new Date();
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekday = weekdays[date.getDay()];

  const formattedDate = `${weekday} ${month} ${day}`;

  document.getElementById("date").textContent = formattedDate;
}
updateDate();
