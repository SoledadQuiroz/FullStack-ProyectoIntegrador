import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
// data.json que simula ser la api que consumo//
  login(credentials:LoginRequest):Observable<User>{
   return this.http.get<User>('../../assets/data.json');//aca reemplazar con la url de la api
  }
}
