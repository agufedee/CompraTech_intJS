const menu = document.querySelector(".menu")
const nav = document.querySelector(".header__nav")

menu.addEventListener("click", ()=> {
    activeMenu()
})

// if (window.matchMedia("max-width: 412px").matches) {
    
// }

const activeMenu = () => {
    if (menu.classList.contains("active")){
        menu.classList.remove("active")
        nav.style.display = "none"
    } else {
        menu.classList.add("active")
        nav.style.display = "flex"
    }
}
