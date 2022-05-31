export const nav = document.createElement("nav");
nav.classList.add("header__nav");
const NavBar = () => {
    nav.innerHTML = `
        <ul class="header__nav__list">
            <li class="header__nav__list-item"><a href="#/">Home</a></li>
            <span>|</span>
            <li class="header__nav__list-item"><a href="#">Productos</a></li>
            <span>|</span>
            <li class="header__nav__list-item"><a href="./assets/Sesion/user__sesion.html">Log<span>in</span></a></li>
        </ul>
    `;
    return nav;
};
export default NavBar