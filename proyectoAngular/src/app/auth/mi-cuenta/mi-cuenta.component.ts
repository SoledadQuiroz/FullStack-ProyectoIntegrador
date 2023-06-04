import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  userForm = this.formBuilder.group({
    username: ['', Validators.required,Validators.minLength(4)],
    password: ['', Validators.required,Validators.minLength(8)],
    confirmPassword: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigateByUrl("");
      this.userForm.reset();
    }
    else {
      this.userForm.markAllAsTouched();
    }
  }
}