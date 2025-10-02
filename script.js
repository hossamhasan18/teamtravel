document.addEventListener('DOMContentLoaded', () => {
    // ===================================
    // 1. كود قائمة الهامبرغر
    // ===================================
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerIcon && navLinks) {
        // عند الضغط على الأيقونة، قم بتبديل فئة 'active'
        hamburgerIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // إخفاء القائمة عند الضغط على أي رابط بداخلها
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }


    // ===================================
    // 2. كود زر العودة إلى الأعلى
    // ===================================
    const scrollBtn = document.getElementById('scrollToTopBtn');

    if (scrollBtn) {
        // الوظيفة الأولى: إظهار/إخفاء الزر عند التمرير
        window.addEventListener('scroll', () => {
            // يظهر الزر بعد التمرير لمسافة 300 بكسل
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        // الوظيفة الثانية: الصعود للأعلى عند النقر
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // يجعل حركة الصعود ناعمة
            });
        });
    }
});