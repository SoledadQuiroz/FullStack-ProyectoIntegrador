function validarDatos() {
    const usuario = document.getElementById("email").value
    const pass = document.getElementById("password").value
    const mensaje = document.getElementById("mensaje_login")

    if (usuario == "") {
        mensaje.innerHTML = "Ingrese un email"
        return false
    }
    else if (pass == "") {
        mensaje.innerHTML = "Ingrese una contraseña"
        return false
    }
    else {
        return true
    }
}