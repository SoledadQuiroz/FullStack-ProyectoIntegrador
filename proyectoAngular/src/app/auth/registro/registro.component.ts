import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  userForm!: FormGroup;

  user: User = {
    id: 0,
    username: '',
    name: '',
    email: '',
    birthdate: '',
    password: '',
    isAdmin: false
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required]
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

  onSubmit(event: Event, user:User) {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log("Enviando  al servidor...");
      console.log(user);
      this.usersService.createUser(user).subscribe(
        data => {
          console.log(data.id);
            if (data.id>0)
            {
              alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
              this.router.navigate(['/login'])
            }
        })
      this.router.navigateByUrl('');
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  get Password(){
    return this.userForm.get("password");
  }

  get ConfirmPassword(){
    return this.userForm.get("confirmPassword");
  }

  get Mail(){
    return this.userForm.get("email");
  }

  get Nombre(){
    return this.userForm.get("nombre");
  }

  get Username(){
    return this.userForm.get("username");
  }

  get FechaNacimiento(){
    return this.userForm.get("birthdate");
  }

  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get UsernameValid(){
    return this.Username?.touched && !this.Username?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get Password2Valid(){
    return this.ConfirmPassword?.touched && !this.ConfirmPassword?.valid;
  }

  get FechaNacimientoValid(){
    return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
  }
}
