import { Component } from '@angular/core';
import { Cultivo } from './cultivos.model';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent {

  cultivos:Cultivo[] = [
    {id:'tomate', name:'TOMATE', img:'./assets/tomate.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/calabaza.png', category:'vegetal'},
    {id:'cebolla', name:'CEBOLLA', img:'./assets/cebolla.png', category:'vegetal'},
    {id:'lechuga', name:'LECHUGA', img:'./assets/lechuga.png', category:'vegetal'}
  ];

}
