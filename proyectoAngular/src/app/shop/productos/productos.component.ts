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
      description: 'herramienta de alta calidad para tu jardin',
      stock: 10
    },
    {
      image: '../../../assets/regadora.jpg',
      name: 'Regadora',
      category: 'herramientas',
      description: 'para facilitar el regado',
      stock: 10
    },
    {
      image: '../../../assets/girasol.jpg',
      name: 'Semillas de Girasol',
      category: 'semillas',
      description: 'semillas ideales para proyectos simples',
      stock: 1000
    },
    {
      image: '../../../assets/semillas-calabaza.jpg',
      name: 'Semillas de Calabaza',
      category: 'semillas',
      description: 'semillas ideales para proyectos simples',
      stock: 10
    },
  ];
}
