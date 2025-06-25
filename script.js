// Menü auf Mobilgeräten umschalten
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Feedback-Daten
const feedbacks = [
  {
    logo: 'logo1.jpg',
    name: 'Max Mustermann',
    text: 'Omni AI helped us automate critical workflows securely and quickly. Highly recommended!'
  },
  {
    logo: 'logo2.jpg',
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

// Feedback aktualisieren
function updateFeedback() {
  const card = document.getElementById('feedbackCard');
  const data = feedbacks[currentIndex];
  card.querySelector('.feedback-logo').src = data.logo;
  card.querySelector('.feedback-name').textContent = data.name;
  card.querySelector('.feedback-text').textContent = data.text;
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

// Beim Laden der Seite initialisieren
document.addEventListener('DOMContentLoaded', updateFeedback);