import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/interfaces/UserLogin.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let userData: UserLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this._authService.login(userData).subscribe(
      response => {
        let token = response.token;
        localStorage.setItem('token', token);
        localStorage.setItem('favs', '[]');
        this.router.navigate(['/techs/collection']);
      }, error => {
        console.error(error);
      }
    )
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
