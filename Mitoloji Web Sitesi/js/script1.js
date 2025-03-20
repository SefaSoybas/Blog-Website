//Galeri
ScrollReveal().reveal('.animation1', { delay: 300 });
ScrollReveal().reveal('.animation2', { delay: 600 });
ScrollReveal().reveal('.animation3', { delay: 900 });

//Men�
var menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight ="350px";
    }
    else {
        menuItems.style.maxHeight = "0px"
    }
}

//Hakk�mda ve �zge�mi�
window.sr = ScrollReveal();
sr.reveal('.animation4', {
    origin: 'left',
    duration: 1500,
    distance: '25rem',
    delay: 300
})
sr.reveal('.animation5', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 700
})

//�leti�im
sr.reveal('.animation6', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 300
})
sr.reveal('.animation7', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 300
})