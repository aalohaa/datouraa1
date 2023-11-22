let searchBtn = document.querySelector('#search-btn');
        let searchBar = document.querySelector('.search-bar-container');
        let formBtn = document.querySelector('#login-btn');
        let loginForm = document.querySelector('.login-form-container');
        let formClose = document.querySelector('#form-close');
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.navbar');
        let videoBtns = document.querySelectorAll('.vid-btn');
        let video = document.querySelector('#video-slider');
        let loginBtn = document.querySelector('#login-btn');
        
        let currentVideoSrc = video.getAttribute('src');
        let isTransitioning = false;

        window.onscroll = () => {
            searchBtn.classList.remove('fa-times');
            searchBar.classList.remove('active');
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
            loginForm.classList.remove('active');
        }

        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        searchBtn.addEventListener('click', () => {
            searchBtn.classList.toggle('fa-times');
            searchBar.classList.toggle('active');
        });

        formBtn.addEventListener('click', () => {
            loginForm.classList.add('active');
        });

        formClose.addEventListener('click', () => {
            loginForm.classList.remove('active');
        });

        loginBtn.addEventListener('click', () => {
            loginForm.classList.add('active');
        });

        // Изменение видимости видео и их смена
        videoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (isTransitioning) return;

                isTransitioning = true;

                document.querySelector('.controls .active').classList.remove('active');
                btn.classList.add('active');

                let src = btn.getAttribute('data-src');

                // Плавное скрытие текущего видео
                video.style.opacity = 0;

                // Плавная смена источника видео
                setTimeout(() => {
                    if (src !== currentVideoSrc) {
                        video.setAttribute('src', src);
                        currentVideoSrc = src;
                        video.load();
                        video.play();
                    }
                }, 250);

                // Плавное показывание нового видео
                setTimeout(() => {
                    video.style.opacity = 1;
                    isTransitioning = false;
                }, 250);
            });
        });