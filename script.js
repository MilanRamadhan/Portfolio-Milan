document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Progress bar update on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = `${scrollPercent}%`;

        // Highlight active navigation link based on scroll position
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    const toggleDarkMode = () => {
        const body = document.body;
        const darkModeButton = document.getElementById('toggle-dark-mode');
        const icon = darkModeButton.querySelector('i');

        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    // Dark mode toggle button event listener
    const darkModeButton = document.getElementById('toggle-dark-mode');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    // Smooth scrolling and animation activation for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                sections.forEach(section => section.classList.remove('slide-in'));
                targetElement.classList.add('slide-in');

                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Ensure smooth scroll behavior is applied globally
    document.documentElement.style.scrollBehavior = 'smooth';
});
