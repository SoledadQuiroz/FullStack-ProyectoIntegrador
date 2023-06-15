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
export class CarritoComponent {
  // propiedades que se reciben del componente padre
  @Input() seleccion:selecCarrito[];
  @Input() estadoModal:boolean;
  
  constructor(){
    // inicializando propiedades:
    this.seleccion = []
    this.estadoModal = false;
  }
}
