import { Injectable } from '@angular/core';
import { Cultivo } from '../mi-jardin/cultivo/cultivos.model';

@Injectable({
  providedIn: 'root'
})
export class CultivosService {

  cultivoSembrar: Cultivo[] = [];
  
  cultivoFavorito: Cultivo[] = [];

  readyInFavoritos: Cultivo[] = [];

  constructor() { }
}
