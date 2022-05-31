import { nav } from "./NavBar.js"

const BurgerMenu = () => {
    const menu = document.createElement("div")
    menu.classList.add("menu")
    menu.innerHTML = `
        <div class="menu__sp1"></div>
        <div class ="menu__sp2"></div>
        <div class="menu__sp3"></div>
    `
    //---- Evento para menu Hamburguesa
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
    return menu
}

export default BurgerMenu;