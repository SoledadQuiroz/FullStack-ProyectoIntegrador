//----------------DATOS PERSONALES------------------//
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const nacimiento = document.getElementById("nacimiento");
const password = document.getElementById("password");
const reppassword = document.getElementById("reppassword")
const mensaje = document.getElementById("mensaje_login");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usuario.value.length < 1 || usuario.value.trim() == "") {
        let elemento = document.querySelector(".usuario");
        elemento.lastElementChild.innerHTML = "*usuario no valido";
    }

    else {
        if (nombre.value.length < 1 || nombre.value.trim() == "") {
            let elemento = document.querySelector(".nombre");
            elemento.lastElementChild.innerHTML = "*nombre no valido";
        }

        if (email.value.length < 1 || email.value.trim() == "") {
            let elemento = document.querySelector(".email");
            elemento.lastElementChild.innerHTML = "*email no valido";
        }

        if (nacimiento.value.length < 1 || nacimiento.value.trim() == "") {
            let elemento = document.querySelector(".nacimiento");
            elemento.lastElementChild.innerHTML = "*ingrese una fecha";
        } if (password.value.length < 1 || password.value.trim() == "") {
            let elemento = document.querySelector(".password");
            elemento.lastElementChild.innerHTML = "*contraseña no valida";

        }

        if (reppassword.value.length < 1 || reppassword.value.trim() == "") {
            let elemento = document.querySelector(".reppassword");
            elemento.lastElementChild.innerHTML = "*repita la contraseña";
        }
        return true;
    }
})