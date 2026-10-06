/* =====================================================
   SUDHA YADAV — PORTFOLIO SCRIPT
   Handles: mobile hamburger menu, back-to-top button, footer year
   ===================================================== */

// ---------- 1. MOBILE HAMBURGER MENU ----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu automatically after a link is tapped
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// ---------- 2. BACK-TO-TOP BUTTON ----------
const backToTop = document.getElementById("backToTop");

// Show the button only after the user has scrolled down a bit
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- 3. AUTO-UPDATE FOOTER YEAR ----------
// Keeps the copyright year correct without manual edits
document.getElementById("year").textContent = new Date().getFullYear();
