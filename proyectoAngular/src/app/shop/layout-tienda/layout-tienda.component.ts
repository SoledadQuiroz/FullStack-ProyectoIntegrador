import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-layout-tienda',
  templateUrl: './layout-tienda.component.html',
  styleUrls: ['./layout-tienda.component.css']
})
export class LayoutTiendaComponent{
  // funcionalidad para vistas responsive
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
      image: '../../../assets/pala-jardineria.JPG',
      name: 'Pala Jardinera',
      precio: 0,
      category: 'Herramientas',
      description: 'peso y dimensiones',
      stock: 10,
      display : "grid"
    },
    {
      image: '../../../assets/regadora.jpg',
      name: 'Regadora',
      precio: 0,
      category: 'herramientas',
      description: 'peso y dimensiones',
      stock: 10,
      display : "grid"
    },
    {
      image: '../../../assets/girasol.jpg',
      name: 'Semillas de Girasol',
      precio: 0,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 1000,
      display : "grid"
    },
    {
      image: '../../../assets/semillas-calabaza.jpg',
      name: 'Semillas de Calabaza',
      precio: 0,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 10,
      display : "grid"
    },
  ];
}
