export default function scrollSmooth() {
  const linksInterno = document.querySelectorAll('[data-smooth="smooth"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInterno.forEach((links) => {
    links.addEventListener('click', scrollToSection);
  })
}