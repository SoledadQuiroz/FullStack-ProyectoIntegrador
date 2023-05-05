import { Component, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  // variable flag
  toggleEffect = false;

  // funcion para cambiar el estado de la v. flag
  desplegarMenu() {
    this.toggleEffect = !this.toggleEffect;
  }
}