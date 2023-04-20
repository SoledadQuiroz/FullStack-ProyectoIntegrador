// --------------------- OBJETO ATRIBUTOS ----------------------//
let a = {
    titulos: document.querySelectorAll("article h3 a"),
    tituloSeleccionado: null,
    imagenEfecto: null,
    // varaible booleana para definir el estado
    estado: false
}

// --------------------- OBJETO ATRIBUTOS ----------------------//

let m = {
    asignarEventos: function () {
        // se agrega el evento "mouseover" a cada titulo de la presentacion
        a.titulos.forEach(element => {
            element.addEventListener("mouseover", m.identificarTitulo);
            element.addEventListener("mouseout", m.identificarTitulo);
        });
    },

    identificarTitulo: function (element) {
        // se identifica sobre que elementos se aplica el efecto
        a.tituloSeleccionado = element.target;

        if (a.tituloSeleccionado.id == "titulo_cultivos") {
            a.imagenEfecto = document.querySelector("#cultivos img");

        } else if (a.tituloSeleccionado.id == "titulo_ventas") {
            a.imagenEfecto = document.querySelector("#ventas img");

        } else if (a.tituloSeleccionado.id == "titulo_consejos") {
            a.imagenEfecto = document.querySelector("#consejos img");
        }

        // se define el estado (imagen expandida / tamaño original)
        // usando un valor booleano para representar cada estado
        if (a.estado == false) {
            m.aplicarEfecto(a.imagenEfecto);
        } else {
            m.quitarEfecto(a.imagenEfecto);
        }
    },

    aplicarEfecto: function (icono) {
        // finalmente se aplica el efecto
        icono.style.transition = "0.5s";
        icono.style.height = "265px";
        console.log(icono.id);
        // se cambia el estado
        a.estado = true;
    },

    quitarEfecto: function (icono) {
        icono.style.transition = "0.5s";
        icono.style.height = "250px";
        console.log(icono.id);
        // se cambia el estado
        a.estado = false;
    }
}

m.asignarEventos();