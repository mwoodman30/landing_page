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

