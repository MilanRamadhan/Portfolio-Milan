document.addEventListener('DOMContentLoaded', () => {
    // Pastikan AOS sudah disertakan jika digunakan
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Progress bar saat scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = scrollPercent + '%';

        // Highlight link saat scroll
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLinks[index]) {
                    navLinks[index].classList.add('active');
                }
            }
        });
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
        const icon = darkModeButton.querySelector('i');
        darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
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
