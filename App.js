import BannerProducts from "./scripts/components/BannerProducts.js"
import BurgerMenu from "./scripts/components/BurguerMenu.js"
import Footer from "./scripts/components/Footer.js"
import Header from "./scripts/components/Header.js"
import HeroSection from "./scripts/components/HeroSection.js"

export const App = () => {
    const root = document.getElementById('root')
    root.appendChild(Header()) 

    root.appendChild(HeroSection())

    root.appendChild(BannerProducts())

    root.appendChild(Footer())

}