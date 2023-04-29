import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products = [
    {
      image: '../../../assets/pala-jardineria.JPG',
      name: 'Pala Jardinera',
      category: 'Herramientas',
      stock: 10
    },
    {
      image: '../../../assets/regadora.jpg',
      name: 'Regadora',
      category: 'herramientas',
      stock: 10
    },
    {
      image: '../../../assets/girasol.jpg',
      name: 'Semillas de Girasol',
      category: 'semillas',
      stock: 1000
    },
    {
      image: '../../../assets/semillas-calabaza.jpg',
      name: 'Semillas de Calabaza',
      category: 'semillas',
      stock: 10
    },
  ];
}
