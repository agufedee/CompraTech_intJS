const Destacados = () => {
    const destacados = document.createElement("section");
    destacados.classList.add("destacado");

    destacados.innerHTML = `
        <h3 class="destacado__text">Productos Destacados</h3>
        <div class="destacado__container">
            <div>
                <img class="destacado__img" src="https://http2.mlstatic.com/D_NQ_NP_802516-MLA48533694456_122021-O.webp"/>
                <h3>In-ear Sony WF-C500</h3>
            </div>
            <div>
                <img class="destacado__img" src="https://http2.mlstatic.com/D_NQ_NP_767506-MLA44753864880_012021-O.webp"/>
                <h3>Mi Watch Lite 2</h3>
                </div>
            <div>
                <img class="destacado__img" src="https://http2.mlstatic.com/D_NQ_NP_865361-MLA48113011956_112021-O.webp"/>
                <h3>Motorola Edge 20 Pro</h3>
            </div>
        </div>
    `;

    return destacados;
};

export default Destacados;
