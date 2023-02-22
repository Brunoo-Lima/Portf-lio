export default function animaScroll() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');
  
  if (sections.length) {
    const windowTop = window.innerHeight * 0.6;
 
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - windowTop) < 0;

        if(sectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}