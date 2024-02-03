/*=====toggle icon navbar=====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*=====sticky navbar=====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===== remove toggle icon and navbar when click navbar link (scroll) =====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===== scroll reveal animation =====*/
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 250,
});

ScrollReveal().reveal('.home-content, .heading, .blog-slider', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form, #contents_2, .about-content h3', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img, #contents_1, .skills-box, .about-content', { origin: 'left'});
ScrollReveal().reveal('.home-content p', { origin: 'right'});


/*===== typed js=====*/
const typed = new Typed('.multiple-text', {
    strings: [ 'Frontend Developer',  'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Initialize Swiper for the blog slider
const swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
    });