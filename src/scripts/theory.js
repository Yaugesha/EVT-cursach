import "../styles/style.scss";
import "../styles/pages/theory/theory.scss";

import { trackArticle } from "./articleTracker";
import { burgerMenu } from "./burgerMenu";
import { toggleTheme } from "./toggleTheme";

toggleTheme();
burgerMenu();
if (window.matchMedia("(min-width: 829px)").matches) {
  trackArticle();
}
