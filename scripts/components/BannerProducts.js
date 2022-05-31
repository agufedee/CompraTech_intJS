const BannerProducts = () => {
    const banner = document.createElement("section");

    banner.classList.add("banner");
    banner.innerHTML = `
        <div class = "banner__auricular"><h3>Auriculares</h3><button>Ver</button></div>
        <div class = "banner__reloj"><h3>Relojes</h3><button>Ver</button></div>
        <div class = "banner__celular"><h3>Celulares</h3><button>Ver</button></div>
    `;
    return banner;
};

export default BannerProducts;
