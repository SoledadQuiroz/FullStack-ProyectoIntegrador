import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { productos} from  "../layout-tienda/prod-detalles.model";
import { precios} from  "../layout-tienda/prod-detalles.model";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{
  // propiedades que se reciben desde
  // el componente padre
  @Input() prodID:string;
  @Input() prodDetalles:productos[];
  @Input() prodPrecios:precios[];
  // propiedades que se exportan al comp. padre:
  @Output() booleanProperty = new EventEmitter<boolean>();
  
  // detalles del producto:
  prodSeleccionado:any;

  constructor() {
    // se inicializan las propiedades
    // que se reciben via input
    this.prodID = ''; 
    this.prodDetalles = [];
    this.prodPrecios = [];
  }


  // variable que representa
  // el estado del modal:
  estadoModal = true;
  cerrarModal(){
    this.estadoModal = false;
    this.booleanProperty.emit(this.estadoModal);
  }

  ngOnInit(){
    // busca los detalles producto seleccionado
    // para posteriormenete interpolarlos a la plantilla:
    this.prodDetalles.forEach(element => {
      if (element.name == this.prodID) {
        this.prodSeleccionado = element;
        console.log("producto seleccionado: ", element);
      }
    });
  }

}
