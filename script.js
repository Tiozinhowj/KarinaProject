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

sr.reveal('.box1' ,{duration: 2500})
sr.reveal('.box2' ,{duration: 2500})
sr.reveal('.box3' ,{duration: 2500})
sr.reveal('.box4' ,{duration: 2500})
sr.reveal('.indeximg' ,{duration: 6000} )
sr.reveal('.indeximg2' ,{duration: 6000} )
sr.reveal('.indeximg3' ,{duration: 6000} )
sr.reveal('.maps' ,{duration: 5000} )