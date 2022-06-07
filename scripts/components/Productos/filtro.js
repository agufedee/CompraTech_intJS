const checkAuricular = document.getElementById("auricular");
const checkReloj = document.getElementById("reloj");
const checkCelular = document.getElementById("celular");

const contentAuricular = document.getElementById("products1");
const contentReloj = document.getElementById("products2");
const contentCelular = document.getElementById("products3");



checkAuricular.addEventListener("change", () => {
    filtroAuricular()
    
});

checkReloj.addEventListener("change",()=>{
    filtroReloj()
})

checkCelular.addEventListener("change", ()=>{
    filtroCelular()
})

const filtroAuricular = () =>{
    if (checkAuricular.checked) {
        contentAuricular.style.display = "block"
    } else {
        contentAuricular.style.display = "none"
    }
}

const filtroReloj =()=>{
    if (checkReloj.checked) {
        contentReloj.style.display = "block"
    } else {
        contentReloj.style.display = "none"
    }
}

    const filtroCelular =()=>{
        if (checkCelular.checked) {
            contentCelular.style.display = "block"
        } else {
            contentCelular.style.display = "none"
        }    
}