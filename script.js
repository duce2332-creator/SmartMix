const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
    const isOpen = siteNav?.classList.toggle('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', String(!!isOpen));
});

siteNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
});

const smoothLinks = document.querySelectorAll('a[href^="#"], [data-scroll]');

smoothLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href')?.replace('#', '') || link.getAttribute('data-scroll');
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 30);
});
