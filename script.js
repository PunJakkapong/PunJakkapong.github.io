// Get all the navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Get all the sections that have an ID
const sections = document.querySelectorAll('section[id]');

// Function to remove the active class from all links
function removeActiveClass() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

// Add click event listener to each navigation link for smooth scrolling and highlighting
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    removeActiveClass(); // Remove active class from all links
    this.classList.add('active'); // Add active class to the clicked link

    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Get the target section element

    if (targetSection) {
      // Scroll to the target section smoothly
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Add logic to highlight the link on scroll (more complex, might add later)
// This part would involve IntersectionObserver or scroll event listeners to detect which section is in view. 