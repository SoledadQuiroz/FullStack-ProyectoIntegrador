import { Component, ElementRef} from '@angular/core';
import { HtmlTagDefinition } from '@angular/compiler';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-layout-tienda',
  templateUrl: './layout-tienda.component.html',
  styleUrls: ['./layout-tienda.component.css']
})

export class LayoutTiendaComponent{
  // instruccion para utilizar el modulo elementRed
  constructor(private elementRef: ElementRef){}
  // funcionalidades para vistas responsive
  public getScreenSize(): string {
    const width = window.innerWidth;
    if (width < 600) {
      return 'grid_principal_movil';
    } else if (width >= 600 && width < 992) {
      return 'grid_principal_tablet';
    } else {
      return 'grid_principal_escritorio';
    }
  }
  
  // funcionalidad buscador:
  palabraBusqueda:string = "";
  buscarProducto(){
    this.products.forEach(product => {
      if(product.name.toLowerCase().includes(this.palabraBusqueda.toLowerCase())){
        product.display = "grid";
        return product.display;
      } else{
        product.display = "none";
        return product.display;
      }
    });
  }
  // lista de productos:
  products = [
    {
      image: '../../../assets/imagenes-tienda/pala.jpeg',
      name: 'Pala Jardinera',
      precio: 1000,
      category: 'Herramientas',
      description: 'peso y dimensiones',
      stock: 100,
      display : "grid"
    },
    {
      image: '../../../assets/imagenes-tienda/regadora.jpeg',
      name: 'Regadora',
      precio: 1500,
      category: 'herramientas',
      description: 'peso y dimensiones',
      stock: 100,
      display : "grid"
    },
    {
      image: '../../../assets/imagenes-tienda/girasol.jpeg',
      name: 'Semillas de Girasol',
      precio: 20,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 1000,
      display : "grid"
    },
    {
      image: '../../../assets/imagenes-tienda/calabaza.jpeg',
      name: 'Semillas de Calabaza',
      precio: 30,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 1000,
      display : "grid"
    },
  ];
  //valores para insertar en el modal de compra:
  // ubicacion numerica en el array:
  prodSeleccionado:number = 0;
  //nombre prod seleccionado:
  nombreProdSeleccionado:string = "";
  imagenProdSeleccionado:string = "";
  valorUnitario:number = 0;
  stockProducto:number = 0;
  cantidadElegida:number = 0;
  limiteStock:boolean = false;
  //funcionalidades modal COMPRA
  abrirModal:boolean = false;

  comprarProducto(event: MouseEvent){
    // 1 - se abre el modal:
    this.abrirModal = true;
    // 2 - se identifica el producto clickeado:
    const clickedItem = event.target as HTMLElement;
    const productoSeleccionado = clickedItem.parentElement!.parentElement;
    console.log(productoSeleccionado);
    // 3 - se obtienen los valores interpolados asociados a este:
    this.products.forEach(product => {
      if (productoSeleccionado!.id == product.name){
        this.prodSeleccionado = this.products.indexOf(product);
        this.nombreProdSeleccionado = product.name;
        this.imagenProdSeleccionado = product.image;
        this.valorUnitario = product.precio;
        this.stockProducto = product.stock;
      }
    });
  }

  validarCantidad(){
    if(this.cantidadElegida >= this.stockProducto || this.cantidadElegida < 0){
      this.limiteStock = true;
    } else{
      this.limiteStock = false;
    }
  }

  cerrarModalCompra(){
    // se resetean las variables de referencia:
    this.abrirModal = false;
    // this.cantidadElegida = 0;
    // this.limiteStock = false;
  }

  //funcionalidades modal TERMINAR COMPRA
  // elemento modal
  abirFormasPago:boolean = false;
  metodoSeleccionado:string = "";
  mostrarEjemploCodigo:boolean = false;
  mostrarEjemploExpiracion:boolean = false;
  remarcarMensajeCantidad:boolean = false;
  // datos tarjeta
  numeroTarjetaInput:string = "";
  codigoTarjetaInput:string = "";
  expiracionTarjetaInput:string = "";
  // costos
  costoCompra:number = 0;
  envioCiudad:number = 500;
  envioProvincia:number = 1000;
  envioPais:number = 2000;
  // regiones
  direccionSeleccionada:string = "";
  ciudadSeleccionada:string = "";
  provinciaSeleccionada:string = "";
  costoRegionSeleccionada:number = 0;
  // costo final
  valorTotalCompra:number = this.costoCompra + this.costoRegionSeleccionada;
  //expresiones regulares
  numeroTarjetaRegex = /^(\d{4}[- ]){3}\d{4}|\d{16}$/;
  codigoSeguridadRegex = /^\d{3}$/;
  expiracionRegex = /^\d{4}-(0[1-9]|1[0-2])$/;
  direccionRegex = /^[a-zA-Z0-9\s]*$/;
  localidadRegex = /^[a-zA-Z\s]*$/;
  provinciaRegex = /^[a-zA-Z\s]*$/;
  // imagenes iconos validacion:
  iconos = [
    // done icon [0]
    "../../../assets/imagenes-tienda/done-icon.png",
    // not done icon [1]
    "../../../assets/imagenes-tienda/not-done-icon.png",
    // invalid [2]
    "../../../assets/imagenes-tienda/invalid-icon.png"
  ]
  // almacenan el estado de cada input (valido o no):
  // datos tarjeta:
  numeroTarjetaEstado:boolean = false;
  codigoTarjetaEstado:boolean = false;
  expiracionTarjetaEstado:boolean = false;
  // datos ubicacion:
  direccionEstado:boolean = false;
  localidadEstado:boolean = false;
  provinciaEstado:boolean = false;

  abrirMetodosPago(cantidad:number){
  // se cierra el modal anterior y se abre uno nuevo:
  if (cantidad>0){
    // si el usuario selecciono al menos una unidad
    this.cerrarModalCompra();
    this.abirFormasPago = true;
    // valor de la compra realizada
    this.costoCompra = this.cantidadElegida * this.valorUnitario;
    return;
  } else{
    // se remarca el mensaje que debe comprar al menos una unidad
    this.remarcarMensajeCantidad = true;
  }
  }

  cerrarMetodosPago(){
  // se modifica el stock (solo para efecto visual por ahora):
  this.products[this.prodSeleccionado].stock -= this.cantidadElegida;
  // reseteo de propiedades:
  this.cantidadElegida = 0;
  this.remarcarMensajeCantidad = false;
  // se cierra modal:
  this.abirFormasPago = false;
  
  }

  calcularEnvio(){
  // 1ro - se valida que los campos esten completo
  if (this.direccionSeleccionada != "" && this.provinciaSeleccionada != "" && this.ciudadSeleccionada != ""){
    if (this.provinciaSeleccionada.toLowerCase() == "cordoba"){
      // 2do - se valida si el envio es a la ciudad / provincia / resto del pais
      if (this.ciudadSeleccionada.toLowerCase() == "cordoba capital"){
        this.costoRegionSeleccionada = this.envioCiudad;
        return "$" + this.costoRegionSeleccionada;
      } else {
        this.costoRegionSeleccionada = this.envioProvincia;
        return "$" + this.costoRegionSeleccionada;
      }
    } else{
      this.costoRegionSeleccionada = this.envioPais;
      return "$" + this.costoRegionSeleccionada;
    }
  } else{
    return "calculando..";
  }
  }

  modalCodigo(){
  this.mostrarEjemploCodigo = !this.mostrarEjemploCodigo;
  }

  modalExpiracion(){
  this.mostrarEjemploExpiracion = !this.mostrarEjemploExpiracion;
  }

  validarCamposTarjeta(valor:string,expreg:RegExp,estado:boolean){
    // 1ro - se valida si el campo no esta en blanco:
    if (valor.toString() == ""){
      // en proceso de ser completado...
      return this.iconos[1];
      // campo no vacio:
    } else{
      // 2do - se valida si los valores ingresados son correctos:
      if(expreg.test(valor.toString())){
        // valor valido:
        estado = true;
        return this.iconos[0];
      } else{
        // valor invalido:
        estado = false;
        return this.iconos[2];
      }
    }
  }

  validarCamposDireccion(valor:string,expreg:RegExp,estado:boolean){
    // 1ro - se valida si el campo no esta en blanco:
    if (valor.toString() == ""){
      // en proceso de ser completado...
      return this.iconos[1];
      // campo no vacio:
    } else{
      // 2do - se valida si los valores ingresados son correctos:
      if(expreg.test(valor.toString())){
        // valor valido:
        estado = true;
        return this.iconos[0];
      } else{
        // valor invalido:
        estado = false;
        return this.iconos[2];
      }
    }
  }

  sumarCostosFinales(){
    return this.costoCompra + this.costoRegionSeleccionada;
  }
}
