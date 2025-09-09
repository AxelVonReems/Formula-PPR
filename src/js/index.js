// FAQ accordion script
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(acc => {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if (this.classList.contains("active")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    });
  });
});

// Scroll to "Contact Us" section without adding ID to the address line
document.getElementById('cta-scroll-button').addEventListener('click', function() {
  const target = document.getElementById('contact-us');
  target.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', window.location.pathname);
});