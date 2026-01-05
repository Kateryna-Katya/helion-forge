document.addEventListener('DOMContentLoaded', () => {
    // Иконки
    lucide.createIcons();

    // Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Мобильное меню
    const burger = document.getElementById('burger-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const overlayLinks = document.querySelectorAll('.menu-overlay__link');

    const toggleMenu = () => {
        menuOverlay.classList.toggle('menu-overlay--active');
        burger.classList.toggle('burger--active');
        document.body.classList.toggle('no-scroll');
    };

    burger.addEventListener('click', toggleMenu);
    overlayLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // Валидация телефона (только цифры)
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d+]/g, '');
    });

    // Математическая капча
    const captchaText = document.getElementById('captcha-text');
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const captchaResult = num1 + num2;
    captchaText.innerText = `Сколько будет ${num1} + ${num2}?`;

    // Обработка формы
    const contactForm = document.getElementById('main-contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userCaptcha = document.getElementById('captcha-input').value;

        if (parseInt(userCaptcha) !== captchaResult) {
            alert('Неверный результат капчи!');
            return;
        }

        // AJAX simulation
        formMessage.innerText = "Отправка...";
        formMessage.style.display = "block";

        setTimeout(() => {
            contactForm.reset();
            formMessage.innerText = "Спасибо! Запрос успешно отправлен. Мы свяжемся с вами в ближайшее время.";
            formMessage.classList.add('success');
        }, 1500);
    });

    // Intersection Observer для анимаций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // Cookie Popup
    const cookiePopup = document.getElementById('cookie-popup');
    const cookieAccept = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => cookiePopup.classList.add('active'), 2000);
    }

    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookiePopup.classList.remove('active');
    });

    // Header scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('header--scrolled', window.scrollY > 50);
    });
});