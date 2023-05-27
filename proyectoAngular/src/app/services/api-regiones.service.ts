import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRegionesService {

  private urlProvincias = 'https://apis.datos.gob.ar/georef/api/provincias';

  constructor(private http: HttpClient) { }

  getDataProvincias(): Observable<any> {
    return this.http.get<any>(this.urlProvincias);
  }
}
