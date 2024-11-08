function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Preloader Animation (Fixing)
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none'; // Hides the preloader after page load
});

// Smooth Scroll to Sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId); // Get the section by id
  if (section) { // If the section exists
      section.scrollIntoView({
          behavior: 'smooth' // Smooth scroll to the section
      });
  } else {
      console.error('Section not found: ' + sectionId); // Handle if the section doesn't exist
  }
}

// Hamburger Menu Toggle (Fixing issues with closing braces and functions)
document.getElementById('hamburger-icon').addEventListener('click', function () {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('open');
  const icon = document.querySelector('.hamburger-icon');
  icon.classList.toggle('open');
});

// Animating buttons (Add hover transition)
const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
  btn.addEventListener('mouseover', function () {
      btn.style.transform = 'scale(1.1)';
      btn.style.transition = 'transform 0.3s ease';
  });

  btn.addEventListener('mouseout', function () {
      btn.style.transform = 'scale(1)';
  });
});

// Event Listener for Scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
});
// script.js

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this); // Get form data

  // Send the form data to the server
  fetch('/contact', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          alert('Message sent successfully!');
          this.reset(); // Reset the form
      } else {
          alert('Error sending message. Please try again.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
  });
});
const PORT = process.env.PORT || 3001; // Use a different port like 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


