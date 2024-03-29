import { Injectable } from '@angular/core';
import { Cultivo } from '../mi-jardin/cultivo/cultivos.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CultivosService {

  API_URL = 'http://127.0.0.1:8000/cultivos/crops/';

  cultivoSembrar: Cultivo[] = [];
  
  cultivoFavorito: Cultivo[] = [];

  readyInFavoritos: Cultivo[] = [];

  constructor(private http:HttpClient) { }

  listCultivos():Observable<Cultivo[]>{
    return this.http.get<Cultivo[]>(this.API_URL);
  }
}
