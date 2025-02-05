document.querySelector('.hamburger').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  const hero = document.querySelector('.hero');
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    hero.style.marginTop = `${navLinks.offsetHeight}px`; // Ajuste l'espace
  } else {
    hero.style.marginTop = '0';
  }
});





const texts = [
  "Développeur Web Front-end",
  "Administrateur de base de données (Acces,Mysql)",
  "Développeur Web Stagiaire chez MNJ-Soft"
];

const typingSpeed = 75; // Vitesse de frappe en ms
const erasingSpeed = 30; // Vitesse d'effacement en ms
const delayBetweenTexts = 1500; // Pause entre les textes (après frappe) en ms

const typedContainer = document.getElementById("typed");
let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeText() {
  if (!isErasing) {
    // Frappe du texte
    if (charIndex < texts[textIndex].length) {
      typedContainer.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Pause avant effacement
      isErasing = true;
      setTimeout(typeText, delayBetweenTexts);
    }
  } else {
    // Effacement du texte
    if (charIndex > 0) {
      typedContainer.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeText, erasingSpeed);
    } else {
      // Passer au texte suivant
      isErasing = false;
      textIndex = (textIndex + 1) % texts.length; // Recommence en boucle
      setTimeout(typeText, typingSpeed);
    }
  }
}

// Lancer l'animation
typeText();



// compteur
function animateValue(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const increment = end > start ? 1 : -1;

  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;

    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Observer pour démarrer l'animation uniquement quand visible
function startCounting(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue("years", 0, 2, 2000);
      animateValue("projects", 0, 5, 2000);
      animateValue("clients", 0, 90, 2000);
      observer.disconnect(); // Stop l'observation après l'animation
    }
  });
}

const observer = new IntersectionObserver(startCounting);
observer.observe(document.querySelector(".stats"));


// validation formulaire contact

    // Initialisation d'EmailJS
    emailjs.init("zoZQrmrwGF0PCbmH5");

    // Gestionnaire de soumission du formulaire
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();

      // Récupération des données du formulaire
      const serviceID = "service_1";
      const templateID = "template_klhmq52";

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          alert("Message envoyé avec succès !");
        }, (error) => {
          alert("Échec de l'envoi : " + error.text);
        });
    });
