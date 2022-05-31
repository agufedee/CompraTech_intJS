import { userName, userPass } from "./registro_usuario.js";

const formLog = document.getElementById("formLog")
const inputUser = document.getElementById("userLog")
const inputPass = document.getElementById("passLog")

formLog.addEventListener("submit", (e) => {
    e.preventDefault()
    iniciarSesion()
})

const iniciarSesion = () => {
    if (inputUser.value == userName && inputPass.value == userPass) {
        window.location.href = "../..//index.html"
    } else {
        alert("Usuario y/o constraseña incorrectos. Por favo intente nuevamente")
    }
}