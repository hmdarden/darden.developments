
//Hamburger Menu//
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fade-in once
    }
  });
}, { threshold: 0.1 }); // trigger when 10% of element is visible

faders.forEach(fader => observer.observe(fader));