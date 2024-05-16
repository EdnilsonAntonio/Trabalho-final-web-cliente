// Script: Este script serve para revelar o conteúdo da página ao rolar com ajuda do CSS

window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var ctaReveal = document.querySelectorAll('.cta-reveal')

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('reveal-now');
            ctaReveal[0].classList.add('leave');
            
        }
        else {
            reveals[i].classList.remove('reveal-now');
        }
    }

}