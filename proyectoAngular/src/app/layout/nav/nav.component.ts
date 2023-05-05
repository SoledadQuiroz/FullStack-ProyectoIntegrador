import { Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // variable para controlar el estado del nav
  // false = cerrado / open = abierto:
  //isNavOpen = false;
  // toma la resolucion actual
  //resolucion = window.innerWidth;
  // valida si la res es escritorio
  //isDesktop = false;
  
  // funcion para cambiar el estado del nav:
  // toggleNav() {
  //   // al abrirse cambia de estado
  //   this.isNavOpen = !this.isNavOpen;
  // }

  // funcion para ajustar los estilos del nav:
  // estilosNav():string{
  //   if(this.resolucion <= 600 && this.isNavOpen){
  //     return "nav_movil";
  //   } else{
  //     this.isNavOpen = false;
  //     return "nav_normal";
  //   }
  // }

}