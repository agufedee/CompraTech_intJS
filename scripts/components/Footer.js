const Footer = () => {
    const footer = document.createElement("footer")

    footer.classList.add("footer")

    footer.innerHTML = `
    <p>by <a href="../index.html" id="footerLink">CompraTech</a> | Since 2022</p>

    `
    return footer
}

export default Footer