import { Component } from '@angular/core';
import { Cultivo } from '../cultivo/cultivos.model';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent {
  cultivos:Cultivo[] = [];

  favoritos:Cultivo[] = [
    {id:'tomate', name:'TOMATE', img:'./assets/tomate.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/calabaza.png', category:'vegetal'}
  ];

  addCultivo(favorito:Cultivo){
    console.log("Cultivo agregado", favorito);
    this.cultivos.push(favorito);
  }

}
