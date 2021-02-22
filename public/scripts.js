// burger functionality from Bulma.io
document.addEventListener("DOMContentLoaded", () => {
    // Get all navbar-burger elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    // check for burgers
    if ($navbarBurgers.length > 0) {
        // add click event
        $navbarBurgers.forEach( el => {
            el.addEventListener("click", () => {
                // get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // toggle the "is-active" class on both the navbar-buger and the navbar menu
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            })
        })
    }
})

// // alert after user presses submit
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");
//     console.log("we found a form!")
//     form.addEventListener("submit", function(event) {
//         console.log("user submitted a form!")
//         //window.alert(`Thank you! We received your information and will be in touch soon!`);
//         form.reset();
//         event.preventDefault();
//     })
// })

document.addEventListener("DOMContentLoaded", () => {
    console.log("script loaded")
})
