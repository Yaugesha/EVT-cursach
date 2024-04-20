import chevronDown from "../public/svg/ic-chevron-down.svg";
import chevronUp from "../public/svg/ic-chevron-up.svg";

export function dropdownButton() {
  const deropDownButton = document.querySelector(".drop-down-button");
  const description = document.querySelector(".description-container");

  deropDownButton.addEventListener("click", (e) => {
    e.preventDefault();
    const button = e.target;

    if (button.textContent === "Read less") {
      button.textContent = "Read more on JavaScript";
      description.style.setProperty("--blur-width", "100%");
      button.style.setProperty(
        "--dropdown-button__chevron",
        `url(${chevronDown})`
      );
    } else {
      button.textContent = "Read less";
      button.style.setProperty(
        "--dropdown-button__chevron",
        `url(${chevronUp})`
      );
      description.style.setProperty("--blur-width", "0%");
    }

    description.classList.toggle("description-container_short");
  });
}
