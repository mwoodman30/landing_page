//  FIX SMOOTH SCROLL



const navbar = document.querySelector('.navlinks');
const sections = document.querySelectorAll('.sectionBody');

 for (section of sections) {
  let navItem = document.createElement('li');
  let navLink = document.createElement('a');
  
  navLink.setAttribute('href',`#${section.id}` );
  navLink.textContent = section.dataset.nav;
  navItem.appendChild(navLink);
  navbar.appendChild(navItem);
}

//navbar mobile menu
const slide = () => {
  const bar = document.querySelector('.bar');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  
  //toggle nav
  bar.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animate links  //navLinks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    //bar animation
    bar.classList.toggle('toggle');
  });

}
slide();

// mobile bars
function bar(x) {
  x.classList.toggle("toggle");
}



/******************************************************** */
let navbarLis = document.querySelectorAll('.navlinks');
navbarLis = Array.from(navbarLis); 

//Adds an on click eventlistener to each navbar link element 
navbarLis.forEach(element => {
    element.addEventListener("click", myScrollFunction);
});

function myScrollFunction(e) {
    e.preventDefault();
    const targetScroll = e.target.hash;
    const scrollTo = document.querySelector(targetScroll);
    scrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};


/******************************************************** */
// Add class 'active' to section when it is near top of viewport
function active() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    
    if (box.top <= 150 && box.bottom >= 150) {
      const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");

    } else {
      const id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.remove("active");
      section.classList.remove("your-active-class");
    }
  }
}
// Make sections active
document.addEventListener("scroll", function() {
  active();
});
/*************************************************************/
mybutton = document.getElementById("mysectionBody");

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

