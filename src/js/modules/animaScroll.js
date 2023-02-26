export default function animaScroll() {
  const scroll = document.querySelectorAll('[data-scroll="scroll"]');

  if (scroll.length) {
    const windowTop = window.innerHeight * 0.6;

    function animaScroll() {
      scroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowTop < 0;

        if (sectionVisible) {
          section.classList.add('active');
        }
      });
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
