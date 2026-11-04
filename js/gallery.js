"use strict";

const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  // Bootstrap uses data-bs-theme; Tailwind uses data-theme.
  root.setAttribute("data-bs-theme", theme);
  const isLight = theme === "light";
  if (themeBtn) themeBtn.setAttribute("aria-pressed", String(isLight));
  if (themeLabel) themeLabel.textContent = isLight ? "Харанхуй горим" : "Цайвар горим";
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (error) {}
const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (error) {}
  });
}

document.querySelectorAll(".flip-card").forEach((card) => {
  card.querySelectorAll(".flip-btn").forEach((button) => {
    button.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });
});

const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.textContent = isOpen ? "☰ Цэс" : "✕ Хаах";
  });
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = ["fullName", "email", "message"];
    let valid = true;
    fields.forEach((id) => {
      const input = document.getElementById(id);
      const error = document.querySelector(`[data-error-for="${id}"]`);
      const fieldValid = input.checkValidity();
      input.classList.toggle("is-invalid", !fieldValid);
      if (error) error.classList.toggle("show", !fieldValid);
      if (!fieldValid) valid = false;
    });
    const message = document.getElementById("formMessage");
    if (message) {
      message.textContent = valid ? "Маягт амжилттай шалгагдлаа!" : "Алдаатай талбаруудаа шалгана уу.";
      message.style.color = valid ? "#22c55e" : "#f87171";
    }
    if (valid) form.reset();
  });
}
