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

//----------------DATOS PERSONALES------------------//

function validarDatosPersonales(){
    const usuario=document.getElementById("usuario").value
    const nombre=document.getElementById("nombre").value
    const email=document.getElementById("email").value
    const nacimiento=document.getElementById("nacimiento").value
    const mensaje=document.getElementById("mensaje_login")

    if (usuario==""){
        mensaje.innerHTML="Ingrese un usuario válido"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (nombre=""){
        mensaje.innerHTML="Ingrese su nombre"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (email==""){
        mensaje.innerHTML="Ingrese un email válido"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (nacimiento==""){
        mensaje.innerHTML="Ingrese su fecha de nacimiento"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else {
        return true
    }
}