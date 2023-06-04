import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
  })

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl("");
      this.loginForm.reset();
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }
}