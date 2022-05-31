const Logo = () => {
    const h1 = document.createElement("h1");

    h1.innerHTML = `
    <a href="index.html" class="header__logo">
        COMPRA<span>TECH</span>
    </a>`;
    return h1;
};

export default Logo;
