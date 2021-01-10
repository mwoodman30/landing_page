// navbar 
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

//scroll function
const navLinks = document.querySelectorAll('a')

function smoothScroll() {
    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const LinkAttribut = link.getAttribute("href").substring(1);
            e.preventDefault();
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
smoothScroll();


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


