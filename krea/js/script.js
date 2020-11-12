window.addEventListener("scroll", hashDelete)
        function hashDelete() {
            if (window.location.hash) {
               history.pushState(null,null,"index.html");
            }   
        }
        
        var servicesBtn = document.querySelector(".services_button");
        if (window.matchMedia("(max-width:1100px)").matches) {
            document.querySelector(".plus3").appendChild(servicesBtn);
        }
        
        var navList = document.querySelectorAll("nav ul li a");
        var mobileMenu = document.querySelector(".mobile-menu")
        if (window.matchMedia("(max-width:435px)").matches) {
            for(var a of Array.from(navList)) {
                a.classList.add("nav-link")
                mobileMenu.appendChild(a);
            }
        }
        
        var burger = document.querySelector(".burger");
        var mobileMenu = document.querySelector(".mobile-menu")
        burger.addEventListener("click", burgerActivated);
        
        function burgerActivated() {
            mobileMenu.classList.toggle("mobile-menu-close");
            burger.classList.toggle("burger_active");
        }

        // FULL SCREEN
        var vh = window.innerHeight * 0.01;
        
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });