import { Component } from '@angular/core';
import { Cultivo, Crecimiento } from '../cultivo/cultivos.model';
import { CultivosService } from '../../services/cultivos.service';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent {
  activeAlert:boolean = false;
  activeCover:boolean = false;
  activeInfo:boolean = false;

  alertText:string = '';
  infoCultivos: Cultivo[] = [];

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
    this.activeCover = !this.activeCover;
    this.activeAlert = !this.activeAlert;
  }

  eliminarCultivo(index:number){
    this.cultivosService.cultivoSembrar.splice(index, 1);
    this.alertText = 'El Cultivo se elimino';
    this.activeCover = !this.activeCover;
    this.activeAlert = !this.activeAlert;
  }

  addToSembrar(cultivo:Cultivo){
    this.cultivosService.cultivoSembrar.push(cultivo);
    this.alertText = 'El Cultivo fue agregado para Sembrar';
    this.activeCover = !this.activeCover;
    this.activeAlert = !this.activeAlert;
  }

  showAlert(){
    this.activeAlert = !this.activeAlert;
    this.activeCover = !this.activeCover;
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
  }
  

  startCountDown(index: number): void {
    console.log('Starting countdown for item at index', index);
    const item: Cultivo = this.cultivosService.cultivoSembrar[index];
    const crecimiento: Crecimiento = item.crecimiento_set[0]; // Suponemos que solo hay un objeto en crecimiento_set
    
    if (!crecimiento.countdownActive) {
      crecimiento.countdown = crecimiento.cosecha;
      
      const timerId = setInterval(() => {
        crecimiento.countdown--;
        
        if (crecimiento.countdown <= 0) {
          this.alertText = 'El cultivo ' + item.nombre + ' ya se puede cosechar';
          this.activeCover = !this.activeCover;
          this.activeAlert = !this.activeAlert;
          clearInterval(timerId);
          this.cultivosService.cultivoSembrar.splice(index, 1);
        }
      }, 1000);//1000 * 60 * 60 * 24 intervalo por dia
      
      crecimiento.countdownActive = true;
    }
  }
  
  

  

}
