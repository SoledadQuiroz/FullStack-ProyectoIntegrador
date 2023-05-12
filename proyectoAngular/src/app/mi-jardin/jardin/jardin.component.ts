import { Component } from '@angular/core';
import { Cultivo } from '../cultivo/cultivos.model';
import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent {
  activeAlert = false;
  alertText = '';

  constructor(private cultivosService:CultivosService) { }

  get cultivosToSembrar(): Cultivo[] {
    return this.cultivosService.cultivoSembrar;
  }


  get cultivosToFavorito(): Cultivo[] {
    return this.cultivosService.cultivoFavorito;
  }

  removeFavorito(index:number){
    this.cultivosService.cultivoFavorito.splice(index, 1);
    this.alertText = 'El Cultivo se elimino de Favoritos';
    this.activeAlert = !this.activeAlert;
  }

  addToSembrar(cultivo:Cultivo){
    this.cultivosService.cultivoSembrar.push(cultivo);
    this.alertText = 'El Cultivo fue agregado para Sembrar';
    this.activeAlert = !this.activeAlert;
  }

  showAlert(){
    this.activeAlert = !this.activeAlert;
  }

}
