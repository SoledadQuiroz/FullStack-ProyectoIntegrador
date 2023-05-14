import { Component } from '@angular/core';
import { Cultivo } from './cultivos.model';
import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent {

  activeAlert = false;

  alertText = '';
  cultivos:Cultivo[] = [
    {id:'tomate', name:'TOMATE', img:'./assets/tomate.png', category:'frutas'},
    {id:'calabaza', name:'CALABAZA', img:'./assets/calabaza.png', category:'vegetal'},
    {id:'cebolla', name:'CEBOLLA', img:'./assets/cebolla.png', category:'vegetal'},
    {id:'lechuga', name:'LECHUGA', img:'./assets/lechuga.png', category:'vegetal'}
  ];

  constructor(private cultivosService:CultivosService) { }

  addToSembrar(cultivo:Cultivo){
    this.cultivosService.cultivoSembrar.push(cultivo);
    this.alertText = 'El Cultivo fue agregado a Mi Jardín';
    this.activeAlert = !this.activeAlert;
  }

  showAlert(){
    this.activeAlert = !this.activeAlert;
  }

  addToFavorito(cultivo:Cultivo){
    if(!this.cultivosService.readyInFavoritos.includes(cultivo)){
      this.cultivosService.cultivoFavorito.push(cultivo);
      this.cultivosService.readyInFavoritos.push(cultivo);
      this.alertText = 'El Cultivo fue agregado a en Favoritos';
      this.activeAlert = !this.activeAlert;
    }else{
      this.alertText = 'El Cultivo ya se encuentra en Favoritos';
      this.activeAlert = !this.activeAlert;
    }
  }

}
