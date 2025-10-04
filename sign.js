document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    //  وظيفة قائمة الهامبرغر (Navbar Toggle for Mobile)
    // ----------------------------------------------------
    const hamburger = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // تبديل فئة 'active' لإظهار/إخفاء القائمة
            navLinks.classList.toggle('active');
            
            // تغيير أيقونة الهامبرغر إلى X والعكس
            hamburger.classList.toggle('fa-xmark'); 
            hamburger.classList.toggle('fa-bars'); 
        });
    }

    // ----------------------------------------------------
    //  وظيفة زر العودة للأعلى (Scroll-to-Top)
    // ----------------------------------------------------
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // ----------------------------------------------------
    //  وظيفة التحقق من تسجيل الدخول وتغيير مسار التوجيه
    // ----------------------------------------------------
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('loginMessage');
    
    // ⚠ البيانات الموحدة للدخول (Hardcoded) ⚠
    const VALID_USERNAME = "eg.teamtravel@gmail.com"; 
    const VALID_PASSWORD = "TeamTravel2025"; 

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const enteredUsername = usernameInput.value.trim();
            const enteredPassword = passwordInput.value;

            if (enteredUsername === VALID_USERNAME && enteredPassword === VALID_PASSWORD) {
                // النجاح في الدخول: التوجيه إلى صفحة emplyee-form.html 
                loginMessage.style.display = 'none';
                
                // ⬅ هذا هو التعديل المطلوب ⬅
                window.location.href = 'employee-form.html'; 
                
            } else {
                // فشل الدخول: عرض رسالة الخطأ ومسح كلمة المرور
                loginMessage.style.display = 'block';
                passwordInput.value = '';
                usernameInput.focus();
            }
        });
    }
});