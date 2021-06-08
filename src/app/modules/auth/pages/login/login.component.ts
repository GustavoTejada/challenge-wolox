import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  // ACCESSORS METHODS

  // mail

  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  get mailControlValid() {
    return this.emailControl.touched && !this.mailControlInvalid;
  }

  get mailControlInvalid() {
    return (
      this.emailControl.touched &&
      (this.emailControl.hasError('required') || this.emailControl.hasError('email'))
    );
  }

  // password

  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  get passwordControlValid() {
    return this.passwordControl.touched && !this.passwordControlInvalid;
  }

  get passwordControlInvalid() {
    return (
      this.passwordControl.touched &&
      (this.passwordControl.hasError('required') ||
        this.passwordControl.hasError('minlength'))
    );
  }


}
