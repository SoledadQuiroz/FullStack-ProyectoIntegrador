import { Component } from '@angular/core';
import { Cultivo } from './cultivos.model';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent {
  cultivos:Cultivo[] = [
    {id:'aceituna', name:'ACEITUNA', img:'./assets/recursos/icono-aceituna.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/recursos/icono-calabaza.png', category:'vegetal'},
    {id:'cebolla', name:'CEBOLLA', img:'./assets/recursos/icono-cebolla.png', category:'vegetal'},
    {id:'lechuga', name:'LECHUGA', img:'./assets/recursos/icono-lechuga.png', category:'vegetal'},
    {id:'aceituna', name:'ACEITUNA', img:'./assets/recursos/icono-aceituna.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/recursos/icono-calabaza.png', category:'vegetal'},
    {id:'cebolla', name:'CEBOLLA', img:'./assets/recursos/icono-cebolla.png', category:'vegetal'},
    {id:'lechuga', name:'LECHUGA', img:'./assets/recursos/icono-lechuga.png', category:'vegetal'}
  ]
}
