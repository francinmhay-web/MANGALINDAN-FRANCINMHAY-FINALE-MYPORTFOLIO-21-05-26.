// Smooth scroll animation
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });
});

// Simple button alert
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {

    btn.addEventListener('click', () => {
        alert("Thank you for visiting my portfolio!");
    });

});