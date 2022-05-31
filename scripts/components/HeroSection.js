const HeroSection = () => {
    const hero = document.createElement("section");

    hero.classList.add("hero");
    hero.innerHTML = `
        <div class="hero__content">
            <p>Los mejores Gadgets al mejor Precio</p>
        </div>
    `;
    return hero;
};

export default HeroSection
