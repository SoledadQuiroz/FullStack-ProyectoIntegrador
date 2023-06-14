import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../auth/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://reqres.in/api/login";
  loggedIn = new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    console.log("Servicio de Autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.url, user)
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
