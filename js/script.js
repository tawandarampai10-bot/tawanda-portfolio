
/* =================================
   1. PAGE LOADING ANIMATION
================================= */

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("page-loaded");

});


/* =================================
   2. SMOOTH SCROLLING
================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
