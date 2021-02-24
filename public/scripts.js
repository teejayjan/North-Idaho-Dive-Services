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

// carousel stuff
document.addEventListener("DOMContentLoaded", () => {
    // checks if we're on a page with carousel (home)
    if (document.querySelector("#carousel")) {
        // hidden by default, keeps images from flashing until we're done loading the page
        document.querySelector("#carousel").classList.remove("hide-carousel")

        //carousel from: https://bulma-carousel.onrender.com
        bulmaCarousel.attach('#carousel', {
            initialSlide: 0,
            duration: 400,
            autoplaySpeed: 4000,
            infinite: true,
            breakpoints: [{ changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }]
        });
    }
})

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

// auto-format phone number: https://tomduffytech.com/how-to-format-phone-number-in-javascript/
function phoneNumberFormatter() {
    const inputField = document.getElementById("phoneInput");
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6, 10)}`;
}
document.getElementById("phoneInput").addEventListener("input", () => {
    phoneNumberFormatter();
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
            url: "https://formspree.io/f/mrgovnwa",
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
            // console.log(response)
            const modal = document.querySelector("#modal");
            modal.classList.add("is-active");
        })
    })
})

// console message for debugging script :) 
document.addEventListener("DOMContentLoaded", () => {
    console.log("script loaded")
})
