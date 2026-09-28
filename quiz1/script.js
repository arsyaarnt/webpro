document.addEventListener('DOMContentLoaded', () => {

    const mascot = document.querySelector('.header-mascot');
    const meow_sound = new Audio('/quiz1/cat_sound.mp3');
    if (mascot) {
        mascot.style.cursor = 'pointer';
        mascot.addEventListener('click', () => {
            meow_sound.currentTime = 0;
            meow_sound.play();
        })
    }

    const click_sound = new Audio('/quiz1/click.mp3');
    const clickables = document.querySelectorAll('a, .gallery-item, .btn-mini, .sub-window-ask, .sub-window-exc');
    clickables.forEach(element => {
        element.addEventListener('click', (e) => {
            click_sound.currentTime = 0;
            click_sound.play().catch(err => console.log(err));

            const target_url = element.getAttribute('href');
            if (target_url && target_url !== '#' && !target_url.startsWith('javascript')) {
                e.preventDefault();

                setTimeout(() => {
                    window.location.href = target_url;
                }, 150);
            }
        });
    });

    const x = document.querySelectorAll('.sub-window-close');
    const x_sound = new Audio('/quiz1/error.mp3');
    x.forEach(btn => {
        btn.addEventListener('click', () => {
            x_sound.currentTime = 0;
            x_sound.play().catch(err => console.log(err));
        });
    });

    const menu_btn = document.getElementById('menu-toggle-btn');
    const nav_list = document.querySelector('nav ul');

    if (menu_btn && nav_list) {
        menu_btn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav_list.classList.toggle('active');

            if (typeof click_sound !== 'undefined') {
                click_sound.currentTime = 0;
                click_sound.play().catch(err => console.log(err));
            }
        });

        document.addEventListener('click', (e) => {
            if (!nav_list.contains(e.target) && !menu_btn.contains(e.target)) {
                nav_list.classList.remove('active');
            }
        });
    }
})