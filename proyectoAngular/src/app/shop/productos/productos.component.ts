import { Component, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{
  // propiedades que se reciben desde
  // el componente padre
  @Input() prodNombre:string;
  // propiedades que se exportan al comp. padre:
  @Output() booleanProperty = new EventEmitter<boolean>();

  constructor() {
    // se inicializan las propiedades
    // que se reciben via input
    this.prodNombre = ''; 
  }

  // variable que representa
  // el estado del modal:
  estadoModal = true;

  cerrarModal(){
    this.estadoModal = false;
    this.booleanProperty.emit(this.estadoModal);
  }

}
