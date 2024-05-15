import "../styles/style.scss";
import "../styles/pages/course/course.scss";

import { dropdownButton } from "./dropdownButton";
import { printCode } from "./liveTextPrinting";
import { burgerMenu } from "./burgerMenu";
import { addPopupEventListener } from "./popup";
import { toggleTheme } from "./toggleTheme";

dropdownButton();
printCode();
burgerMenu();
addPopupEventListener();
toggleTheme();
