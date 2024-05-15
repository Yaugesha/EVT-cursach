export function toggleTheme() {
  const root = document.documentElement;

  const switcher = document.querySelector(".theme-switch__input");

  const setDarkTheme = () => {
    root.style.setProperty("--background", "#111827");
    root.style.setProperty("--text", "#d1d5d8");
    root.style.setProperty("--background-hover", "#1e293bb3");
    root.style.setProperty("--shadow", "#111827");
    root.style.setProperty("--box-shadow", "rgba(67, 67, 67, 0.35)");
    root.style.setProperty("--border", "#d5d6dc");
    root.style.setProperty("--button", "#535353");
    root.style.setProperty("--link", "#9ca3af");
    root.style.setProperty("--text-link", "#3b7cd3");
    root.style.setProperty("--text-link-hover", "#5e96fc");
    root.style.setProperty("--form-color", "#181821");
  };

  const setLightTheme = () => {
    root.style.setProperty("--background", "#f8f7ff");
    root.style.setProperty("--text", "#232134");
    root.style.setProperty("--background-hover", "#f5f5f6");
    root.style.setProperty("--shadow", "#fbfcfe");
    root.style.setProperty("--box-shadow", "rgba(0, 0, 0, 0.35)");
    root.style.setProperty("--border", "#d5d6dc");
    root.style.setProperty("--button", "#c7c7c7");
    root.style.setProperty("--link", "#545454");
    root.style.setProperty("--text-link", "#5e96fc");
    root.style.setProperty("--text-link-hover", "#3b7cd3");
    root.style.setProperty("--form-color", "#181821");
  };

  function themePref() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      switcher.checked = true;
      root.style.setProperty("--theme", "dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      switcher.checked = false;
      root.style.setProperty("--theme", "light");
    }
  }

  switcher.addEventListener("click", () => {
    console.log(getComputedStyle(root).getPropertyValue("--theme"));
    if (switcher.checked == true) {
      setDarkTheme();
      root.style.setProperty("--theme", "dark");
    } else {
      setLightTheme();
      root.style.setProperty("--theme", "light");
    }
  });

  themePref();
}
