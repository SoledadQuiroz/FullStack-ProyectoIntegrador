import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  [x: string]: any;
  estaAutenticado:boolean=false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe(res=>( this.estaAutenticado=res));
   }

  // variable flag
  toggleEffect = false;

  // funcion para cambiar el estado de la v. flag
  desplegarMenu() {
    this.toggleEffect = !this.toggleEffect;
  }
}
