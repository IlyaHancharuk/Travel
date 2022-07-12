/* -----------------Burger menu------------------------------- */
let burger_btn = document.getElementById('burger_btn');
let burger_menu = document.getElementById('burger_menu');
let burger_closer = document.getElementById('burger_closer');
let burger_overlay = document.getElementById('burger_overlay')
let account = document.getElementById('account')
let body = document.getElementById('body')

burger_btn.addEventListener('click', toggleMenu)
burger_closer.addEventListener('click', toggleMenu)
account.addEventListener('click', toggleMenu)
burger_overlay.addEventListener('click', toggleMenu)

function toggleMenu () {
    burger_menu.classList.toggle('burger_menu_active')
    burger_closer.classList.toggle('closer_active')
    burger_overlay.classList.toggle('burger_overlay_active')
    body.classList.toggle('no-scroll-page')
}

/* -------------------------Smoothing scroll-------------------------------- */

let anchors = document.querySelectorAll('a[href*="#"]')



for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        toggleMenu()
        let blockID = anchor.getAttribute('href')
        if (blockID!='#') {
            document.querySelector(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        } else {
            toggleMenu()
        }
    })
}



