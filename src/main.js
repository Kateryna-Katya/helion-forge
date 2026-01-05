document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Инициализация иконок Lucide
    lucide.createIcons();

    // 2. Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // 4. Mobile Menu Toggle (Базовая логика)
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        // Здесь можно добавить анимацию появления меню для мобилок
        console.log('Mobile menu toggled');
        // Временно просто для лога, полноценный билд будет в доп. элементах
    });

    // Плавный скролл к якорям через Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target);
            }
        });
    });
});