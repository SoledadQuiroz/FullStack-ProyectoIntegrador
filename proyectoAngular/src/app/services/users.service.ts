import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://reqres.in/api/users/2';

  constructor(private http: HttpClient) {
    console.log("Servicio User está corriendo");
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
