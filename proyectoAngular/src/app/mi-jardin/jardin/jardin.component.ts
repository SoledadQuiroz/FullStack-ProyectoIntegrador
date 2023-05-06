import { Component } from '@angular/core';
import { Cultivo } from '../cultivo/cultivos.model';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent {
  cultivos:Cultivo[] = [
    // {id:'aceituna', name:'ACEITUNA', img:'./assets/recursos/icono-aceituna.png', category:'frutas'},
    // {id:'calabaza', name:'CALABAZA', img:'./assets/recursos/icono-calabaza.png', category:'vegetal'}
  ];

  favoritos:Cultivo[] = [
    {id:'aceituna', name:'ACEITUNA', img:'./assets/recursos/icono-aceituna.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/recursos/icono-calabaza.png', category:'vegetal'}
  ];

  addCultivo(favorito:Cultivo){
    console.log("Cultivo agregado", favorito);
    this.cultivos.push(favorito);
  }
}
