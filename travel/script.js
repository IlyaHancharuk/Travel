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
let modal_body_reg = document.querySelector('.modal-body-reg')
let reg_link = document.querySelector('.reg-link')
let login_link = document.querySelector('.login-link')
let input_email_login = document.querySelector('.email-login')
let input_pass_login = document.querySelector('.pass-login')
let input_email_reg = document.querySelector('.email-reg')
let input_pass_reg = document.querySelector('.pass-reg')


function openPopUp() { 
    modal_body.style.top = '0'
    modal.style.display = 'flex'
    body.classList.toggle('no-scroll-page')
}

openModalBtn.addEventListener('click', openPopUp)

openModalLink.addEventListener('click', openPopUp)

window.addEventListener('click', function(event) { 
    if (event.target === modal) {
        modal.style.display = 'none'
        modal_body_reg.style.display = 'none'
        modal_body.style.display = 'flex'
        body.classList.toggle('no-scroll-page')
    }
})

reg_link.addEventListener('click', function() {
    modal_body.style.display = 'none'
    modal_body_reg.style.display = 'flex'
})

login_link.addEventListener('click', function() {
    modal_body_reg.style.display = 'none'
    modal_body.style.display = 'flex'
})

document.querySelector('.sign-in-site').addEventListener('click', function() {
    if (input_email_login.value || input_pass_login.value) {
        alert (`E-mail: ${input_email_login.value}\nPassword: ${input_pass_login.value}`)
    }
})

document.querySelector('.sign-up-site').addEventListener('click', function() {
    if (input_email_reg.value || input_pass_reg.value) {
        alert (`E-mail: ${input_email_reg.value}\nPassword: ${input_pass_reg.value}`)
    }
})