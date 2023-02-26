import outsideClick from './outsideClick.js';

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('.menu');
  const events = ['touchstart click', 'click'];
  const activeClass = 'active';

  if (menuButton) {
    function openMenu() {
      menuList.classList.add(activeClass);
      menuButton.classList.add(activeClass);

      outsideClick(menuList, events, () => {
        menuList.classList.remove(activeClass);
        menuButton.classList.remove(activeClass);
      });
    }

    events.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
