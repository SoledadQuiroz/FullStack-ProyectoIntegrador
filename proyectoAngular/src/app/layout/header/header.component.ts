import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  estaAutenticado: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe(res => {
      this.estaAutenticado = res;
    });
  }

  onCerrarSesion() {
    this.authService.logout();
    this.estaAutenticado = false;
    this.router.navigate(['/home']);
  }
}
