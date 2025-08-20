// Script for a simple scroll-to-top button

// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '⬆️';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Style the button
backToTopButton.style.display = 'none'; /* Initially hidden */
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.backgroundColor = '#4CAF50';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.fontSize = '2em';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
backToTopButton.style.transition = 'background-color 0.3s ease, transform 0.3s ease';

// Show/hide the button on scroll
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to top when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
