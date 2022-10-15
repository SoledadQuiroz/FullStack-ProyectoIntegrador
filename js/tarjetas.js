//----------------- ELEMENTOS DOM  -----------------//
let d = {
    titulos: document.querySelectorAll(".titulos"),
    body: document.querySelector("body"),
    titulo_seleccionado: null,
    lightbox: null,
    modal: null,
    icono_cerrar: null,
    img_cerrar: null,
    header_modal: null,
    descripcion_modal: null,
    botones_modal: null,
    sembrar_modal: null,
    fav_modal: null,
}

//----------------- METODOS  -----------------//
let m = {
    agregandoEventos:function(){
        d.titulos.forEach(element => {
            element.addEventListener("click", m.identificarTarjeta);
        });
    },

    identificarTarjeta:function(tarjeta){
        d.titulo_seleccionado = tarjeta.target.id;
        console.log(d.titulo_seleccionado);
        m.crearLightbox();
    },

    crearLightbox:function(){
        d.body.appendChild(document.createElement("div")).setAttribute("class","lightbox");
        d.lightbox = document.querySelector(".lightbox");
        m.crearModal(d.lightbox);
    },

    crearModal:function(lightbox){
        //---- variables para estructura html
        let cerrar_img = "<img src='../recursos/icono-cerrar.png'>";
        let isologo = "<img src='../recursos/icono-isologo.png'>";
        let infoModal = "<h6> INFORMACIÓN </h6>";
        let botonSembrar = '<button type="button" class="sembrar"> SEMBRAR </button>';
        let botonFav = '<button type="button" class="favoritos"> A FAVORITOS ★</button>';

        //----se agrega elemento modal-----
        lightbox.appendChild(document.createElement("div")).setAttribute("id","modal_tarjetas");
        d.modal = document.querySelector("#modal_tarjetas")
        d.modal.classList.add("modal_tarjetas");

        //------- icono cerrar ------
        d.modal.appendChild(document.createElement("div")).setAttribute("class", "icono_cerrar");
        d.icono_cerrar = document.querySelector(".icono_cerrar");
        d.icono_cerrar.insertAdjacentHTML("afterbegin", cerrar_img);
        d.img_cerrar = document.querySelector(".icono_cerrar img")
        d.img_cerrar.addEventListener("click",m.cerrarModal);      

        //-------header modal------
        d.modal.appendChild(document.createElement("div")).setAttribute("class","header_modal");
        d.header_modal = document.querySelector(".header_modal");
        d.header_modal.insertAdjacentHTML("afterbegin", isologo);

        //-------descripcion modal------
        d.modal.appendChild(document.createElement("div")).setAttribute("class","descripcion_modal");
        d.descripcion_modal = document.querySelector(".descripcion_modal");
        d.descripcion_modal.insertAdjacentHTML("afterbegin", infoModal);

        //-------botones modal------
        d.modal.appendChild(document.createElement("div")).setAttribute("class","botones_modal");
        d.botones_modal = document.querySelector(".botones_modal");
        d.botones_modal.insertAdjacentHTML("afterbegin", botonSembrar);
        d.botones_modal.insertAdjacentHTML("beforeend", botonFav);
        
    },

    cerrarModal:function(){
        d.lightbox.remove();
    }





}

m.agregandoEventos();