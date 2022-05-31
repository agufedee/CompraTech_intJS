const formLog = document.getElementById("formLog")
const formReg = document.getElementById("formReg")
const boxLog = document.querySelector(".container__bg__sesion-login")
const boxReg = document.querySelector(".container__bg__sesion-register")
const boxSesion = document.querySelector(".container__sesion")
const btnBoxReg = document.getElementById("btn__registrarse")
const btnBoxLog = document.getElementById("btn__inicioSesion")


const QRegistro = () => {
    if (matchMedia("(max-width: 412px)").matches) {
        formReg.style.display = "block"
        boxSesion.style.top = "260px"
        formLog.style.display = "none"
    } else {
        formReg.style.display = "block"
        boxSesion.style.left = "360px"
        formLog.style.display = "none"
    }
}

export const QInicioSesion = () => {
    if (matchMedia("(max-width: 412px)").matches) {
        formReg.style.display = "none"
        boxSesion.style.top = "-60px"
        formLog.style.display = "block"
    } else {
        formReg.style.display = "none"
        boxSesion.style.left = "20px"
        formLog.style.display = "block"
        
    }
}

btnBoxLog.addEventListener("click", () => {
    QInicioSesion()
})

btnBoxReg.addEventListener("click", () =>{
    QRegistro()
})

