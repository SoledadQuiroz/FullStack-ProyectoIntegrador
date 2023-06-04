import { Component, OnInit } from '@angular/core';
import { Cultivo } from './cultivos.model';
import { CultivosService } from '../../services/cultivos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css'],
  // providers: [FilterPipe]
})
export class CultivoComponent implements OnInit{

  //Modales en false
  activeAlert:boolean = false;
  activeCover:boolean = false;
  activeInfo:boolean = false;

  alertText:string = '';
  cultivos: Cultivo[] = [];
  infoCultivos: Cultivo[] = [];

  tipos = ['Todas', 'Vegetal', 'Frutal', 'Aromática'];
  filterForm: FormGroup = this.fb.group({tipo: ''});

  //El ngModel junto con el pipe filter que se creo podemos buscar por nombre
  searchName: string = '';


  constructor(private cultivosService:CultivosService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.cultivosService.listCultivos().subscribe((data: Cultivo[]) => {
      this.cultivos = data;
      console.log(this.cultivos);
    })

    //Por defecto se mostrara todos los cultivos
    this.filterForm = this.fb.group({
      tipo: ['Todas'],
    });
  }


  get filteredCultivos() {
    //Obtiene el valor de tipo
    const tipo = this.filterForm.get('tipo')?.value;
    //Si tipo es Todas mostrara todos los cultivos
    if (tipo === 'Todas') {
      return this.cultivos;
    } else {
      //Si no mostrara el tipo de cultivo que se haya seleccionado
      return this.cultivos.filter(cultivo => cultivo.tipo === tipo);
    }
  }

  //Agrega el cultivo a sembrar
  addToSembrar(cultivo:Cultivo){
    this.cultivosService.cultivoSembrar.push(cultivo);
    this.alertText = 'El Cultivo fue agregado a Mi Jardín';
    this.activeAlert = !this.activeAlert;
    this.activeCover = !this.activeCover;
  }

  //Activa o desactiva la alerta
  showAlert(){
    this.activeAlert = !this.activeAlert;
    this.activeCover = !this.activeCover;
  }

  //Comprueba si el cultivo esta en favoritos y si no lo agrega
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

  // muestra la información agregando el cultivo a infoCultivo
  showInfo(info:Cultivo){
    this.infoCultivos.push(info);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
  }
  //Cierra la información y elimina el cultivo de infoCultivo
  toggleInfo(){
    this.infoCultivos.splice(0);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
    console.log(this.activeInfo)
  }

}
