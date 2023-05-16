import { Component, OnInit } from '@angular/core';
import { Cultivo } from './cultivos.model';
import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit{

  activeAlert = false;

  alertText = '';
  cultivos: Cultivo[] = [];

  constructor(private cultivosService:CultivosService) { }

  ngOnInit(): void {
    this.cultivosService.listCultivos().subscribe((data: Cultivo[]) => {
      this.cultivos = data;
      console.log(this.cultivos);
    })
  }

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
      this.alertText = 'El Cultivo fue agregado en Favoritos';
      this.activeAlert = !this.activeAlert;
    }else{
      this.alertText = 'El Cultivo ya se encuentra en Favoritos';
      this.activeAlert = !this.activeAlert;
    }
  }

}
