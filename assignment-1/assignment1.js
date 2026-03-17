/* ----------------------------------- */
/* Btn----------------------------- */
/* ----------------------------------- */

document.querySelectorAll("[data-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .getElementById(btn.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".links").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.url);
  });
});

/* ----------------------------------- */
/* Back to Top----------------------------- */
/* ----------------------------------- */
document.getElementById("backTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const isAtBottom = scrollY + windowHeight >= documentHeight - 10; // allow small buffer

  if (scrollY > 300 && !isAtBottom) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
