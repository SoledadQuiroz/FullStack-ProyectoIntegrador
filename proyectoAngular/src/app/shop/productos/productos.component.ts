import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{
  public products = [
    {
      image: '../../../assets/pala-jardineria.JPG',
      name: 'Pala Jardinera',
      precio: 0,
      category: 'Herramientas',
      description: 'peso y dimensiones',
      stock: 10
    },
    {
      image: '../../../assets/regadora.jpg',
      name: 'Regadora',
      precio: 0,
      category: 'herramientas',
      description: 'peso y dimensiones',
      stock: 10
    },
    {
      image: '../../../assets/girasol.jpg',
      name: 'Semillas de Girasol',
      precio: 0,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 1000
    },
    {
      image: '../../../assets/semillas-calabaza.jpg',
      name: 'Semillas de Calabaza',
      precio: 0,
      category: 'semillas',
      description: 'peso y dimensiones',
      stock: 10
    },
  ];
}
