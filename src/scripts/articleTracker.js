export function trackArticle() {
  let selector = window.location.hash.slice(1) || "introduction";

  let current = document.querySelector(`[type="${selector}"]`);
  current.classList.add("current");
  let currentArticle = document.querySelector(`[data-title="${selector}"]`);

  const sectionsNavigation = document.querySelector(".content-navigation");

  sectionsNavigation.addEventListener("click", (e) => {
    // when click was directly on link
    if (!e.target.getAttribute("type")) {
      const selector = e.target.parentElement.getAttribute("type");

      current.classList.remove("current");
      current = document.querySelector(`[type="${selector}"]`);
      currentArticle = document.querySelector(`[data-title="${selector}"]`);
      current.classList.add("current");
    }
  });

  window.addEventListener("scroll", () => {
    const currentArticleCordinates = currentArticle.getBoundingClientRect();

    // when scroll to prev article
    if (currentArticleCordinates.top > 20) {
      current.classList.remove("current");
      current = current.previousElementSibling;
      currentArticle = currentArticle.previousElementSibling;
      current.classList.add("current");
    }

    // when scroll to next article
    if (currentArticleCordinates.top + currentArticleCordinates.height <= -20) {
      current.classList.remove("current");
      current = current.nextElementSibling;
      currentArticle = currentArticle.nextElementSibling;
      current.classList.add("current");
    }
  });
}
