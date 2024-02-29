/* close and open btn menu ---*/
const navBtn = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});
/* end ---*/



/* وقتی روی هر دکمه از منو کلیک شد باعث بسته شدن پنجره میشود */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      navLinks.classList.remove("show-links");

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      let position = element.offsetTop - 62;

      window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
      });
  });
});
/* end ---*/



/* scroll header ---*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});
/* end scroll header ---*/




/* scroll reveall ---*/
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2000,
    delay: 100,
    reset: true
});


sr.reveal(' .about-content, .portfolio-center, .contact-center ',{origin:'top'});
sr.reveal(' .home-text, .service-center, .service-container, .portfolio-container, .contact-container',{origin:'bottom'});
/* end scroll reveall ---*/
