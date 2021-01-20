
const sections = document.querySelector(".navlinks");

    /*for (let section of sections) {
      let SectionList = document.createElement('li');// creating the 'li'
      SectionList.textContent = section;*/
    const fragment = new DocumentFragment();
    sections.forEach(function (section) {
      const a = document.createElement('a');
      a.innerHTML = section.id;
      a.setAttribute('href', `#${section.id}`);
      const menuItem = document.createElement('li');
      menuItem.appendChild(a);
      fragment.appendChild(menuItem);
    });
  menuItem.appendChild(fragment);
/********************************
// navbar mobile menu
function slide() {
  const bar = document.querySelector('.bar');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  
  //toggle nav
  bar.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animate links
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

//scroll function
const navLinks = document.querySelectorAll('li')

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



/*    HIGHLIGHT NAVBAR   *
let navigLink = document.querySelectorAll('section');
let sectionList = document.querySelectorAll('#sectionBody');
window.addEventListener('scroll', function(){
    for (list of sectionList) {
      let position = list.getBoundingClientRect();
      if (position.top <= 150 && position.bottom >= 150) {
        list.classList.add('active-section');
        for (const navig of navigLink) {
          if(navig.classList.contains(list.id)) {
            navig.classList.add('active-nav');
          }
        }
      } else {
        for (const navig of navigLink) {
          list.classList.remove('active-section');
          if (navig.classList.contains(list.id)){
            navig.classList.remove('active-nav');
          }
        }
      }
    }
});*/
