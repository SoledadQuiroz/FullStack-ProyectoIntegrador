import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // apiUrl = 'https://reqres.in/api/users/2';
  apiUrl = 'http://127.0.0.1:8000/django_api/auth/registro/';

  constructor(private http: HttpClient) {
    console.log("Servicio User está corriendo");
  }

  registerUser(userData: User) {
    return this.http.post(this.apiUrl, userData);
  }

  listUsers(): Observable<User>{
    return this.http.get<User>(this.apiUrl);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(usuario:User):Observable<User>{
    return this.http.post<User>(this.apiUrl, usuario);
  }

  updateUser(usuario: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

}
