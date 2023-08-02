import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../auth/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/django_api/';

  url = "https://reqres.in/api/login";
  // se cambia a true para realizar pruebas
  //loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn = new BehaviorSubject<boolean>(true);
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    console.log("Servicio de Autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}auth/registro/`, userData);
  }

  // login(credentials: Pick<User, 'email' | 'password'>): Observable<User> {
  //   return this.http.post<User>(`${this.baseUrl}auth/login/`, credentials);
  // }

  // logout(): Observable<any> {
  //   return this.http.post(`${this.baseUrl}auth/logout/`, {});
  // }




  login(user: User): Observable<User> {
    return this.http.post<any>(`${this.baseUrl}auth/login/`, user)
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        console.log(data);

        return data;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  get UserAutenticado(): User {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
