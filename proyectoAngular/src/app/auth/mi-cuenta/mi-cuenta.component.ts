import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit{
  user: User | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // Asumiendo que la ID del login es obtenido por la autenticacion 
    const userId = 123; // Remplazar por la logica de autenticacion

    this.usersService.getUserById(userId).subscribe(
      user => this.user = user,
      error => console.log('Error fetching user:', error)
    );
  }

  updateUser() {
    if (this.user) {
      this.usersService.updateUser(this.user).subscribe(
        updatedUser => console.log('User updated:', updatedUser),
        error => console.log('Error updating user:', error)
      );
    }
  }
}
