document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню
    const burger = document.getElementById('burger-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const overlayLinks = document.querySelectorAll('.menu-overlay__link');

    const toggleMenu = () => {
        menuOverlay.classList.toggle('menu-overlay--active');
        burger.classList.toggle('burger--active'); // Добавьте стили для крестика
        document.body.style.overflow = menuOverlay.classList.contains('menu-overlay--active') ? 'hidden' : '';
    };

    burger.addEventListener('click', toggleMenu);
    
    overlayLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 2. Lottie Animation (Подключаем абстрактную тех-анимацию)
    const lottieContainer = document.getElementById('lottie-hero');
    if (lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets9.lottiefiles.com/packages/lf20_qpwb7taz.json' // Технологичный абстрактный куб/сфера
        });
    }

    // 3. Анимация появления элементов (Simple Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
                }, index * 150); // Стэк-эффект появления
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 4. Движение blobs за мышью (Микродвижение)
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blob1 = document.querySelector('.hero__blob--1');
        const blob2 = document.querySelector('.hero__blob--2');
        
        if (blob1 && blob2) {
            blob1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
            blob2.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
        }
    });
});