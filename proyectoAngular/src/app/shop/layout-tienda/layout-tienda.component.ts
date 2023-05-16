import { HtmlTagDefinition } from '@angular/compiler';
import { Component, ElementRef} from '@angular/core';

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
abirFormasPago:boolean = false;
metodoSeleccionado:string = "";
mostrarEjemploCodigo:boolean = false;
mostrarEjemploExpiracion:boolean = false;
costoCompra:number = 0;
envioCiudad:number = 500;
envioProvincia:number = 1000;
envioPais:number = 2000;
regionSeleccionada:string = "";
costoRegionSeleccionada:number = 0;
valorTotalCompra:number = this.costoCompra + this.costoRegionSeleccionada;

abrirMetodosPago(cantidad:number){
  // se cierra el modal anterior y se abre uno nuevo:
  if (cantidad>0){
    // si el usuario selecciono al menos una unidad
    this.cerrarModalCompra();
    this.abirFormasPago = true;
    // valor de la compra realizada
    this.costoCompra = this.cantidadElegida * this.valorUnitario;
  }
}

cerrarMetodosPago(){
  this.abirFormasPago = false;
}

calcularEnvio(region:string){
  if (region == "ciudad"){
    this.costoRegionSeleccionada = this.envioCiudad;
    return this.costoRegionSeleccionada;

  } else if(region == "provincia"){
    this.costoRegionSeleccionada = this.envioProvincia;
    return this.costoRegionSeleccionada;

  } else if(region == "pais"){
    this.costoRegionSeleccionada = this.envioPais;
    return this.costoRegionSeleccionada;

  } else{
    return 0;
  }
}

modalCodigo(){
  this.mostrarEjemploCodigo = !this.mostrarEjemploCodigo;
}

modalExpiracion(){
  this.mostrarEjemploExpiracion = !this.mostrarEjemploExpiracion;
}


}
