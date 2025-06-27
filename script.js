// Menü auf Mobilgeräten umschalten
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Feedback-Daten
const feedbacks = [
  {
    logo: 'logo1.jpg',
    name: 'Max Mustermann',
    text: 'Omni AI helped us automate critical workflows securely and quickly. Highly recommended!'
  },
  {
    logo: 'logo1.jpg',
    name: 'Lisa Schmidt',
    text: 'Die maßgeschneiderten KI-Lösungen haben unsere Effizienz enorm gesteigert.'
  },
  {
    logo: 'logo1.jpg',
    name: 'Dr. Ahmed Reza',
    text: 'Die Beratung war zielgerichtet, kompetent und hat unsere Erwartungen übertroffen.'
  }
];

let currentIndex = 0;
let autoSlideInterval;

// Feedback aktualisieren
function updateFeedback() {
  const card = document.getElementById('feedbackCard');
  if (!card) return;
  const data = feedbacks[currentIndex];
  const logo = card.querySelector('.feedback-logo');
  const name = card.querySelector('.feedback-name');
  const text = card.querySelector('.feedback-text');
  if (logo) logo.src = data.logo;
  if (name) name.textContent = data.name;
  if (text) text.textContent = data.text;
}

// Nächstes Feedback anzeigen
function nextFeedback() {
  currentIndex = (currentIndex + 1) % feedbacks.length;
  updateFeedback();
}

// Vorheriges Feedback anzeigen
function prevFeedback() {
  currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
  updateFeedback();
}

// Automatischer Feedback-Slider alle 10 Sekunden
function startAutoSlider() {
  const card = document.getElementById('feedbackCard');
  if (!card) return;
  autoSlideInterval = setInterval(nextFeedback, 10000);
}

// Scroll-to-top-Button
function setupScrollToTop() {
  const button = document.createElement("button");
  button.id = "scrollTopBtn";
  button.innerText = "↑";
  button.setAttribute("aria-label", "Zurück zum Anfang");
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 0.75rem 1rem;
    background-color: #2b85d3;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  `;
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    button.style.display = window.scrollY > 300 ? "block" : "none";
  });
}

// Dark Mode zwischen 22:00 und 07:00 aktivieren
function applyDarkMode() {
  const hour = new Date().getHours();
  if (hour >= 22 || hour < 7) {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateFeedback();
  startAutoSlider();
  setupScrollToTop();
  applyDarkMode();
});