const btn = document.getElementById('burger-btn'),
    burger = document.getElementsByClassName('header-link-menu-mobile')[0],
    anchor = document.querySelectorAll('a[href*="#"]');
btn.addEventListener('click', () => {
    burger.classList.toggle('header-link-menu-mobile-active');
    anchor.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('header-link-menu-mobile-active');
        });
    });
});