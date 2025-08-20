// ===============================
// ReddyGaming JavaScript
// ===============================

// 1) Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu on link click (better mobile UX)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

// 2) Tab Switching (Pro Settings)
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset all
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((tab) => tab.classList.remove("active"));

    // Activate clicked tab
    button.classList.add("active");
    document
      .getElementById(`${button.dataset.tab}-content`)
      .classList.add("active");
  });
});

// 3) Guide Cards (Placeholder for redirect)
document.querySelectorAll(".guide-card").forEach((card) => {
  card.addEventListener("click", () => {
    const page = card.getAttribute("data-page");
    if (page) {
      alert(`Redirecting to ${page} (placeholder)`);
      // window.location.href = page;
    }
  });
});

// 4) Smooth Scroll for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// 5) CTA Buttons
document.querySelectorAll(".cta-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Welcome to ReddyGaming! Training programs coming soon.");
  });
});
