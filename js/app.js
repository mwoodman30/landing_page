
const slide = () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');
    
    //toggle nav
    bar.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
     //animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
        }
    });   
    //bar animation
    bar.classList.toggle('toggle');
    });
    
}
slide();

const navLinks = document.querySelectorAll('a')

function smoothScroll() {
    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const LinkAttribut = link.getAttribute("href").substring(1);
            e.preventDefault();
            //prevent the default action of a click, allow to change the behaviour, in this case it will allow to scroll
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionId = section.id;
                if (LinkAttribut === sectionId) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    })
                }
            })
        })
    })
}
smoothScroll()