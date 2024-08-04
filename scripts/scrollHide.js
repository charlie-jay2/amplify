document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const notibar = document.querySelector('#notification-bar');

    let lastScrollTop = 0;
    const delta = 1;
    const offset = 50;

    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - currentScrollTop) <= delta) {
            return;
        }

        if (currentScrollTop > lastScrollTop && currentScrollTop > offset) {
            header.classList.add('slide-out');
            if (notibar) notibar.classList.add('slide-out');
        } else {
            if (currentScrollTop <= offset) {
                header.classList.remove('slide-out');
                if (notibar) notibar.classList.remove('slide-out');
            }
        }

        lastScrollTop = currentScrollTop;
    });
});
