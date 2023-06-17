import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../user.model';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit{
  userForm!: FormGroup;

  user: User = {
    id: 0,
    username: '',
    name: '',
    email: '',
    birth_date: '',
    password: '',
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birth_date: ['', Validators.required]
    });

  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = this.userForm?.get('password')?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  };

  onSubmit(event: Event, user: User) {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigateByUrl('');
      this.usersService.updateUser(user).subscribe(
        data => {
          console.log(data.id);
        })
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
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