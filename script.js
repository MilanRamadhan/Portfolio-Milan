document.addEventListener('DOMContentLoaded', () => {
    // Pastikan AOS sudah disertakan jika digunakan
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = scrollPercent + '%';
    });
    
    const activateAnimation = (targetElement) => {
        // Hapus animasi dari elemen lain
        sections.forEach(section => {
            if (section !== targetElement && section.classList.contains('slide-in')) {
                section.classList.remove('slide-in');
            }
        });

        // Tambahkan animasi jika belum ada
        if (!targetElement.classList.contains('slide-in')) {
            targetElement.classList.add('slide-in');
        }
    };

    const darkModeButton = document.getElementById('toggle-dark-mode');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Tambahkan event listener pada setiap tautan navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                activateAnimation(targetElement);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
