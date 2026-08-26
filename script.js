/* =========================================
   GET ELEMENTS
========================================= */

const header = document.getElementById("header");

const themeToggle = document.getElementById("theme-toggle");

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

const typingText = document.getElementById("typing-text");

const yearElement = document.getElementById("year");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section[id]");


/* =========================================
   DARK / LIGHT MODE
========================================= */

if (themeToggle) {

    const themeIcon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (themeIcon) {

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

        }

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLightMode =
            document.body.classList.contains("light-mode");


        localStorage.setItem(
            "theme",
            isLightMode ? "light" : "dark"
        );


        if (themeIcon) {

            if (isLightMode) {

                themeIcon.classList.remove("fa-moon");

                themeIcon.classList.add("fa-sun");

            } else {

                themeIcon.classList.remove("fa-sun");

                themeIcon.classList.add("fa-moon");

            }

        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const menuIcon = menuBtn.querySelector("i");


        if (menuIcon) {

            menuIcon.classList.toggle("fa-bars");

            menuIcon.classList.toggle("fa-xmark");

        }

    });

}


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }


        if (menuBtn) {

            const menuIcon =
                menuBtn.querySelector("i");


            if (menuIcon) {

                menuIcon.classList.remove("fa-xmark");

                menuIcon.classList.add("fa-bars");

            }

        }

    });

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

function handleHeaderScroll() {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleHeaderScroll
);


handleHeaderScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

function updateActiveLink() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active-link");


        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.classList.add("active-link");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();


/* =========================================
   TYPING ANIMATION
========================================= */

if (typingText) {

    const roles = [

        "AI Engineer",
        "Machine Learning Engineer",
        "Computer Vision Engineer",
        "Generative AI Developer",
        "Agentic AI Developer"

    ];


    let roleIndex = 0;

    let characterIndex = 0;

    let isDeleting = false;


    function typeRole() {

        const currentRole =
            roles[roleIndex];


        if (!isDeleting) {

            typingText.textContent =
                currentRole.substring(
                    0,
                    characterIndex + 1
                );


            characterIndex++;


            if (
                characterIndex ===
                currentRole.length
            ) {

                isDeleting = true;

                setTimeout(
                    typeRole,
                    1500
                );

                return;

            }

        } else {

            typingText.textContent =
                currentRole.substring(
                    0,
                    characterIndex - 1
                );


            characterIndex--;


            if (characterIndex === 0) {

                isDeleting = false;

                roleIndex =
                    (roleIndex + 1) %
                    roles.length;

            }

        }


        const typingSpeed =
            isDeleting ? 45 : 85;


        setTimeout(
            typeRole,
            typingSpeed
        );

    }


    typeRole();

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(

        ".section-heading, " +
        ".about-text, " +
        ".highlight-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".skill-category, " +
        ".certification-card, " +
        ".contact-content"

    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}