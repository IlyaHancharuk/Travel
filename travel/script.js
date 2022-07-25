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

function toggleMenu (e) {
    console.log(e.target.className)
    if(e.target.className === 'menu-link'){
       burger_menu.classList.remove('burger_menu_active')
       burger_closer.classList.remove('closer_active')
       burger_overlay.classList.remove('burger_overlay_active')
       body.classList.remove('no-scroll-page')
       return
    }
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
        toggleMenu(event)
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


/* -----------------------------------------pop up---------------------------------------------- */

let openModalBtn = document.querySelector('.btn-login')
let openModalLink = document.getElementById('account')
let modal = document.querySelector('.modal')
let modal_body = document.querySelector('.modal-body')

function openPopUp() { 
    modal_body.style.top = '22.5%'
    modal.style.display = 'flex'
}

openModalBtn.addEventListener('click', openPopUp)

openModalLink.addEventListener('click', openPopUp)

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})

