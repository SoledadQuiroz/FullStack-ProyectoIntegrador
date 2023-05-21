import { Component, OnInit } from '@angular/core';
import { Cultivo } from './cultivos.model';
import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit{

  activeAlert:boolean = false;
  activeCover:boolean = false;
  activeInfo:boolean = false;

  alertText:string = '';
  cultivos: Cultivo[] = [];
  infoCultivos: Cultivo[] = [];

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
    this.activeCover = !this.activeCover;
  }

  showAlert(){
    this.activeAlert = !this.activeAlert;
    this.activeCover = !this.activeCover;
  }

  addToFavorito(cultivo:Cultivo){
    if(!this.cultivosService.readyInFavoritos.includes(cultivo)){
      this.cultivosService.cultivoFavorito.push(cultivo);
      this.cultivosService.readyInFavoritos.push(cultivo);
      this.alertText = 'El Cultivo fue agregado en Favoritos';
      this.activeAlert = !this.activeAlert;
      this.activeCover = !this.activeCover;
    }else{
      this.alertText = 'El Cultivo ya se encuentra en Favoritos';
      this.activeAlert = !this.activeAlert;
      this.activeCover = !this.activeCover;
    }
  }

  showInfo(info:Cultivo){
    this.infoCultivos.push(info);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
  }

  toggleInfo(){
    this.infoCultivos.splice(0);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
    console.log(this.activeInfo)
  }

}
