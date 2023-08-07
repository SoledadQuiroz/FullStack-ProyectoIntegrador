// funcionalidades angular
import { Component, Input, Output, OnInit, EventEmitter, ViewChild} from '@angular/core';
// componente padre
import { LayoutTiendaComponent} from '../layout-tienda/layout-tienda.component';
// interfaces
import { productos } from '../layout-tienda/prod-detalles.model';
import { precios } from '../layout-tienda/prod-detalles.model';
import { selecCarrito } from '../layout-tienda/prod-detalles.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  // propiedades que se reciben del componente padre
  @Input() seleccion:selecCarrito[];
  @Input() estadoModal:boolean;
  // propiedad para pasar el estado booleano del modal al componente padre
  @Output() propBooleana = new EventEmitter<boolean>();
  // propiedad para pasar el total de la compra al componente padre:
  @Output() enviarTotal = new EventEmitter<number>();
  // propiedad para enviar los productos seleccionados:
  @Output() prodFinales = new EventEmitter<selecCarrito[]>();
  // valor total de la compra
  valorTotal:number = 0;
  // propiedad local que representa los productos seleccionados
  carritoProds:selecCarrito[];
  
  constructor(){
    // inicializando propiedades:
    this.seleccion = [];
    this.estadoModal = false;
    this.carritoProds = [];
  }
  
  ngOnInit(){
    this.carritoProds = this.seleccion;
  }


  //funcion para actualizar el estado booleano del modal:
  cerrarCarrito(){
    this.estadoModal = false;
    this.propBooleana.emit(this.estadoModal);
  }
  
  
  quitar_producto(event: MouseEvent) {
    // 1ro - se identifica el producto clickeado:
    const prodClickeado = event.target as HTMLElement;  
    const nameProdClickeado = prodClickeado.id;
    // 2do - se identifica el index de dicho producto
    const index = this.carritoProds.findIndex(el => el.name === nameProdClickeado);
    // 3ro - se elimina el producto del array del 'carrito'
    if (index > -1) {
      this.carritoProds.splice(index, 1); 
    }
    // 4to - finalmente se esconde el elemento eliminado 
    // (en caso de que por algun bug este siga presente en el carrito luego de ser eliminado)
    const figureClickeado = prodClickeado.parentElement!.parentElement;
    figureClickeado!.style.display = "none";
  }
  
  // suma el valor total de todos los productos seleccionados:
  calcularTotal(){
    this.carritoProds.forEach(element => {
      this.valorTotal += element.precioTotal;
      console.log(element.name);
    });
    console.log("costo final: $", this.valorTotal);
    console.log(this.carritoProds);
  }
  
  // funcion para enviar los productos seleccionados al elem padre:
  enviarProductosFinales(){
    this.prodFinales.emit(this.carritoProds);
  }

  // funcion para enviar el monto total al elem padre:
  enviarTotales(){
    // 1 - calcula el total de la compra
    this.calcularTotal();
    // 2 - envia al componente padre el valor final
    this.enviarTotal.emit(this.valorTotal);
    // tambien se envian los datos de los productos elegidos:
    this.enviarProductosFinales();
    // 3 - finalmente se cierra el carrito
    this.cerrarCarrito();

  }

}
