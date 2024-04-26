export function addPopupEventListener() {
  const popup = document.querySelector(".popup");

  const buttons = document.querySelectorAll(".popup-open-button");
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      popup.style.display = "flex";
    })
  );

  popup.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("popup-close-button")
    ) {
      document.body.style.overflow = "auto";
      popup.style.display = "none";
    }
  });
}
