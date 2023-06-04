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
  @Input() prodDetalles:Array<object>;
  // propiedades que se exportan al comp. padre:
  @Output() booleanProperty = new EventEmitter<boolean>();
  // detalles del producto:
  detalles = {}
  nombre:string = "";
  categoria:string = "";
  descripcion:string = "";
  peso:string = "";
  dimension:string = "";
  stock:number = 0;


  constructor() {
    // se inicializan las propiedades
    // que se reciben via input
    this.prodNombre = ''; 
    this.prodDetalles = [];
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
    if (this.prodNombre == "Pala Jardinera"){
      this.nombre = 'Pala Jardinera';
      this.categoria = 'Herramientas';
      this.descripcion = 'producto de alta calidad';
      this.stock = 100;
      this.peso = "200grs";
      this.dimension =  "40cm";

    } else if(this.prodNombre == "Regadora"){
      this.nombre = 'Regadora';
      this.categoria = 'Herramientas';
      this.descripcion = 'producto de alta calidad';
      this.stock = 100;
      this.peso = "(capacidad): 2lts";
      this.dimension =  "30cm";

    } else if (this.prodNombre == "Semillas de Tomate"){
      this.nombre = 'Semillas de Tomate';
      this.categoria = 'semillas';
      this.descripcion = 'producto de alta calidad';
      this.stock = 1000;
      this.peso = "2 grs";
      this.dimension =  "3mm";

    } else if (this.prodNombre == "Semillas de Calabaza"){
      this.nombre = 'Semillas de Calabaza';
      this.categoria = 'semillas';
      this.descripcion = 'producto de alta calidad';
      this.stock = 1000;
      this.peso = "2 grs";
      this.dimension =  "3mm";
    }
  }

}
