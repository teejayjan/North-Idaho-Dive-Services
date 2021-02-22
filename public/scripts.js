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

// carousel
// !(function (d) {
//     const itemClassName = "carousel-photo";
//     items = d.getElementsByClassName(itemClassName);
//     totalItems = items.length;
//     slide = 0;
//     moving = true;

//     // set classes
//     function setInitialClasses() {
//         // targets the previous, current, and next items
//         // assumes there are at least three items!
//         items[totalItems - 1].classList.add("prev");
//         items[0].classList.add("active");
//         items[1].classList.add("next");
//     }

//     // set event listeners
//     function setEventListeners() {
//         let next = d.getElementsByClassName("carousel-button--next")[0];
//         let prev = d.getElementsByClassName("carousel-button--prev")[0];

//         next.addEventListener("click", moveNext);
//         prev.addEventListener("click", movePrev);
//     }

//     // next navigation handler
//     function moveNext() {
//         // check if moving
//         if (!moving) {
//             // if it's the last slide, reset to 0, else +1
//             if (slide == (totalItems - 1)) {
//                 slide = 0;
//             } else {
//                 slide++;
//             }
//             // mvoe carousel to updated slide
//             moveCarouselTo(slide);
//         }
//     }
//     // previous navigation handler
//     function movePrev() {
//         // check if moving
//         if (!moving) {
//             /// if it's the first slide, set as the last slide, else -1
//             if (slide == 0) {
//                 slide = (totalItems - 1);
//             } else {
//                 slide--;
//             }
//             // move carousel to updated slide
//             moveCarouselTo(slide);
//         }
//     }
//     function disableInteraction() {
//         // set "moving" to true for the same duration as our transition
//         moving = true;

//         // set timeout runs its function once after the given time
//         setTimeout(function () {
//             moving = false
//         }, 500);
//     }
//     function moveCarouselTo(slide) {
//         // check if carousel is moving, if not, allow interaction
//         if(!moving) {
//             // temporarily disable interactivity
//             disableInteraction();

//             // update the "old" adjacent slides with "new" ones
//             let newPrevious = slide - 1;
//             let newNext = slide + 1;
//             let oldPrevious = slide - 2;
//             let oldNext = slide + 2;

//             // test if carousel has more than three items
//             if ((totalItems - 1) > 3) {
//                 // checks and updates if the slides are out of bounds
//                 if (newPrevious <=0) {
//                     oldPrevious = (totalItems - 1);
//                 } else if (newNext >= (totalItems - 1)) {
//                     oldNext = 0;
//                 }

//                 // checks and updates if slide is at the beginning/end
//                 if (slide === 0) {
//                     newPrevious = (totalItems - 1);
//                     oldPrevious = (totalItems - 2);
//                     oldNext = (slide + 1);
//                 } else if (slide === (totalItems - 1)) {
//                     newPrevious = (slide - 1);
//                     newNext = 0;
//                     oldNext = 1;
//                 }
//                 // reset old next/prev elements to default classes
//                 items[oldPrevious].className = itemClassName;
//                 items[oldNext].className = itemClassName;

//                 // add new classes
//                 items[newPrevious].className = itemClassName + " prev";
//                 items[slide].className = itemClassName + " active";
//                 items[newNext].className = itemClassName + " next";

//             }
//         }
//     }
//     function initCarousel() {
//         setInitialClasses();
//         setEventListeners();

//         // set moving to false so that the carousel is interactive
//         moving = false;
//     }
//     initCarousel();
// }(document));


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

// show modal and submit POST to external form server
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // submit form data to external form handler
        const formData = new FormData(document.querySelector("form"));
        // console.log(formData)
        form.reset();
        event.preventDefault();
        axios({
            url: "http://httpbin.org/post",
            method: "post",
            headers: {
                "Accept": "application/json"
            },
            data: {
                name: `${formData.get("name")}`,
                email: `${formData.get("email")}`,
                phone: `${formData.get("phone")}`,
                location: `${formData.get("location")}`,
                details: `${formData.get("details")}`
            }
        }).then((response) => {
            console.log(response)
            const modal = document.querySelector("#modal");
            modal.classList.add("is-active");
        })
    })
})

// console message for debugging script :) 
document.addEventListener("DOMContentLoaded", () => {
    console.log("script loaded")
})
