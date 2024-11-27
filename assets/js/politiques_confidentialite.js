const scrollTopButton = document.getElementById('scrollTopButton');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


