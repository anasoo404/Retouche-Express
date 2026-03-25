const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const paymentButtons = document.querySelectorAll(".pay-btn");
paymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const price = button.dataset.price;
    alert(`Paiement test lancé pour "${service}" (${price}€).`);
  });
});

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message envoyé (test). Nous vous recontactons bientôt.");
    contactForm.reset();
  });
}
