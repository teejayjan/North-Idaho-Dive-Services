// burger functionality from Bulma.io
document.addEventListener("DOMContentLoaded", () => {
    // Get all navbar-burger elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    // check for burgers
    if ($navbarBurgers.length > 0) {
        // add click event
        $navbarBurgers.forEach(el => {
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

// //hero carousel
// document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector("#heroCarousel");
//     console.log(carousel.classList)
//     let i = 1
//     function slides() {
//         carousel.classList.remove(`has-bg-img-${i}`)
//         carousel.classList.add(`has-bg-img-${i + 1}`)
//         i++
//         if (i > 3){
//             i = 1
//         }
//         setTimeout(slides(), 3000)
//     }
//     slides()
// })


//so the user can close modal
document.addEventListener("DOMContentLoaded", () => {
    const modalClose = document.querySelector("#modalClose");
    const modalCloseBackground = document.querySelector("#modalBackground");
    modalClose.addEventListener("click", () => {
        modal.classList.remove("is-active");
    })
    modalCloseBackground.addEventListener("click", () => {
        modal.classList.remove("is-active");
    })

})

// alert after user presses submit
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    console.log("we found a form!")
    form.addEventListener("submit", function (event) {
        console.log("user submitted a form!")
        form.reset();
        event.preventDefault();
        const modal = document.querySelector("#modal");
        modal.classList.add("is-active");
    })
})

document.addEventListener("DOMContentLoaded", () => {
    console.log("script loaded")
})
