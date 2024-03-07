// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const errorMessages = document.getElementById('errorMessages');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  errorMessages.innerHTML = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    errorMessages.innerHTML = 'All fields are required.';
    return;
  }

  if (!validateEmail(email)) {
    errorMessages.innerHTML = 'Please enter a valid email address.';
    return;
  }

  // Submit the form
});

function validateEmail(email) {
  // Use a regular expression to validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
