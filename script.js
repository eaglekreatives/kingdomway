/* =========================================
   KINGDOM WAY SCHOOLS
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-times");

    } else {

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   HEADER SHADOW
========================================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let count = 0;

        const speed = 60;

        const updateCounter = () => {

            if (count < target) {

                count++;

                counter.textContent = count;

                setTimeout(
                    updateCounter,
                    speed
                );

            } else {

                counter.textContent = target;

            }

        };

        updateCounter();

    });

}


window.addEventListener("scroll", () => {

    const stats =
        document.querySelector(".stats");

    if (!stats) return;

    const position =
        stats.getBoundingClientRect().top;

    if (
        position < window.innerHeight - 100
    ) {

        startCounters();

    }

});


/* =========================================
   GALLERY FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        galleryItems.forEach(item => {

            const category =
                item.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


document.querySelectorAll(".gallery-view")
.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const image =
            button.dataset.image;

        lightboxImage.src = image;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* =========================================
   FAQ
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item =
            question.parentElement;

        const answer =
            item.querySelector(".faq-answer");


        /* Close other questions */

        document.querySelectorAll(".faq-item")
        .forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("open");

                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );

                otherAnswer.style.maxHeight = null;

            }

        });


        item.classList.toggle("open");


        if (item.classList.contains("open")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/* =========================================
   ADMISSION FORM
========================================= */

const admissionForm =
    document.getElementById("admissionForm");


admissionForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("parentName").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const studentClass =
        document.getElementById("class").value;

    const message =
        document.getElementById("message").value;


    const whatsappNumber =
        "2348100544057";


    const text =
        `Hello Kingdom Way Schools,

I would like to request admission information.

Parent/Guardian Name:
${name}

Phone:
${phone}

Email:
${email}

Class Applying For:
${studentClass}

Message:
${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year")
.textContent = new Date().getFullYear();


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".academic-card, .team-card, .staff-card, .contact-card, .value-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});