// funcionalidades angular
import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
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
  carritoProds:selecCarrito[]
  
  constructor(){
    // inicializando propiedades:
    this.seleccion = []
    this.estadoModal = false;
    this.carritoProds = []
  }
  
  ngOnInit(){
    this.carritoProds = this.seleccion
  }


  //funcion para actualizar el estado booleano del modal:
  cerrarCarrito(){
    this.estadoModal = false;
    this.propBooleana.emit(this.estadoModal);
  }
  
  
  //funcion para quitar producto del carrito
  quitar_producto(event : MouseEvent){
    let contador:number =  0;
    // se identifica el elemento que disparo el evento
    const prodClickeado = event.target as HTMLElement;
    const figureClickeado = prodClickeado.parentElement!.parentElement;
    const nameProdClickeado = prodClickeado.id;
    // se lo busca en el array
    this.carritoProds = this.carritoProds.filter(element => {

      // find index of item in array
      const index = this.carritoProds.findIndex(el => el.name === nameProdClickeado);
    
      if (element.name === nameProdClickeado) {
        // remove element at index
        this.carritoProds.splice(index, 1); 
        figureClickeado!.style.display = "none";
        return false; // filter it out
      }
    
      return true; // keep all other elements
    });

  }
  
  // suma el valor total de todos los productos seleccionados:
  calcularTotal(){
    this.carritoProds.forEach(element => {
      this.valorTotal += element.precioTotal
      console.log(element.name)
    });
    console.log("costo final: $", this.valorTotal);
  }

  // funcion para enviar el monto total al elem padre:
  enviarTotales(){
    this.calcularTotal();
    this.enviarTotal.emit(this.valorTotal);
  }
  // funcion para enviar los productos seleccionados al elem padre:
  enviarProductosFinales(){
    this.prodFinales.emit(this.carritoProds);
    console.log(this.prodFinales);
  }

}
