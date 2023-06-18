import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://reqres.in/api/users/2';
  baseUrl = 'http://127.0.0.1:8000/django_api/';

  constructor(private http: HttpClient) {
    console.log("Servicio User está corriendo");
  }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}auth/registro/`, userData);
  }

  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}usuarios/`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}user/profile/`);
  }

  updateUser(usuario: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

}
