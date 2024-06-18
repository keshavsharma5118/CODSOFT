document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const navbar = document.querySelector('.navbar');

    icon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
