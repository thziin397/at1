// Menu mobile toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
