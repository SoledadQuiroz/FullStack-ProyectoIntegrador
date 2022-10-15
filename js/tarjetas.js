//----------------- ELEMENTOS DOM  -----------------//
let d = {
    botones: document.querySelectorAll("button"),
    botonesSembrar: document.querySelectorAll(".sembrar"),
    botonesFav: document.querySelectorAll(".favoritos"),
    body: document.querySelector("body"),
    lightbox: null,
    seleccion: null,
}

//----------------- METODOS  -----------------//
let m = {
    agregarEventos:function(){
        d.botones.forEach(element => {
            element.addEventListener("click", m.identificarClaseBoton);
        });
    },

    identificarClaseBoton:function(boton){
        d.seleccion = boton.target.className;
        if (d.seleccion == "sembrar") {
            alert("el cultivo ha sido sembrado y añadido a 'mi jardin' ");
            // posteriormente se agrega una alerta tipo modal

        } else if(d.seleccion == "favoritos"){
            alert("el cultivo se agrego a favoritos en 'mi jardin'");
            // posteriormente se agrega una alerta tipo modal
        }
    },
    


}

m.agregarEventos();