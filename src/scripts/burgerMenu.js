export function burgerMenu() {
  const BURGER_ICON = document.querySelector(".burger-menu-icon");
  const NAV_MENU = document.querySelector("nav");
  const BODY = document.body;

  if (NAV_MENU && BURGER_ICON) {
    BURGER_ICON.addEventListener("click", () => {
      BURGER_ICON.classList.toggle("rotate");
      NAV_MENU.classList.toggle("active");
      BODY.classList.toggle("lock");
    });

    NAV_MENU.addEventListener("click", (e) => {
      if (e.target.localName === "nav") {
        BURGER_ICON.classList.remove("rotate");
        BODY.classList.remove("lock");
        NAV_MENU.classList.remove("active");
      }
    });

    NAV_MENU.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        BURGER_ICON.classList.remove("rotate");
        BODY.classList.remove("lock");
        NAV_MENU.classList.remove("active");
      });
    });
  }
}
