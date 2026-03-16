// --------------------------------------------------
// To open and close the window
// --------------------------------------------------

const closeBtn = document.querySelector("#close-btn");
console.log(closeBtn);

const win = document.getElementById("finder-win");


function openWindow(tabId) {
  win.classList.add("open");
  switchTab(tabId); // add this line
}

function closeWindow() {
  win.classList.remove("open");
}

closeBtn.addEventListener("click", closeWindow);

// --------------------------------------------------
// Select Folder
// --------------------------------------------------

// About Me
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
    document.getElementById("win-title-text").textContent = activeRow.textContent.trim();
  }
}

sidebarRows.forEach((row) => {
  row.addEventListener("click", () => switchTab(row.dataset.tab));
});

