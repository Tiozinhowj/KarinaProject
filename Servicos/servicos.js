function WhatsApp() {
    location.href = "https://wa.me//5527999709637";
}

const btlogin = document.querySelector('.btlogin')
const menuicon = document.querySelector('.menuicon i')
const navigationMENU = document.querySelector('.navigationMENU')

menuicon.onclick = function () {
    navigationMENU.classList.toggle('open')
    const isOpen = navigationMENU.classList.contains('open')

    menuicon.className = isOpen
        ? 'bx bx-x-circle'
        : 'bx bx-menu';
}

 window.sr = ScrollReveal({ reset: false});

sr.reveal('.container1' ,{duration: 6000} )
sr.reveal('.container2' ,{duration: 6000})
sr.reveal('.container3' ,{duration: 6000})
sr.reveal('.container4' ,{duration: 5000})

