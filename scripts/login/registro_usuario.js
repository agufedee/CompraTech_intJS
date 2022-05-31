import { QInicioSesion } from "./animacion_usuario.js";
const formReg = document.getElementById("formReg");
const inputUser = document.getElementById("userReg");
const inputPass = document.getElementById("passReg");

formReg.addEventListener("submit", (e) => {
    e.preventDefault();
    registro();
});

const registro = () => {
    let user = inputUser.value;
    let pass = inputPass.value;

    if (user.length == 0 || pass.length <= 4) {
        alert(
            "Usuario no puede estar vacio y contraseña debe tener almenos 5 carecteres"
        );
    } else {
        localStorage.usuario = user;
        localStorage.contraseña = pass;
        console.log(userName, userPass)
        QInicioSesion()
    }
};

export const userName = localStorage.usuario;
export const userPass = localStorage.contraseña;


