// Smooth scrolling for side menu links
document.querySelectorAll('.side-menu a').forEach(anchor => { // Changed
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle menu visibility on smaller screens
const menuToggle = document.querySelector('.menu-toggle'); // Changed
const sideMenu = document.querySelector('.side-menu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active'); // Toggle active class
});

