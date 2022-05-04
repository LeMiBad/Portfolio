const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const blockId = item.getAttribute('href');
        document.querySelector(`${blockId}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
});

