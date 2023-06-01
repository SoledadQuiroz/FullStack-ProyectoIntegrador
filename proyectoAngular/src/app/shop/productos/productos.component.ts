import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{
  //propiedades que se reciben desde
  // el componente padre
  @Input() prodNombre:string;

  constructor() {
    this.prodNombre = ''; // initialize the property in the constructor 
  }
}
