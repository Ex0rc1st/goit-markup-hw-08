(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-menu-open-btn"),
    closeMenuBtn: document.querySelector(".mob-menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();