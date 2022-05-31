import NavBar from "./NavBar.js";
import Logo from "./Logo.js";
import BurgerMenu from "./BurguerMenu.js";

const Header = () => {
    const header = document.createElement("header");

    header.classList.add("header");

    header.appendChild(Logo());

    header.appendChild(NavBar());

    header.appendChild(BurgerMenu())
    return header;
};

export default Header;
