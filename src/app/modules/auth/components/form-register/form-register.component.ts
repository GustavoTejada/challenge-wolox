import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/core/interfaces/Country.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserSignUp } from '../../../../core/interfaces/UserSignUp.interface';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.maxLength(30)]],
      last_name: ['', [Validators.required, Validators.maxLength(30)]],
      country: ['', [Validators.required]],
      province: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      conditions: ['', [Validators.required]]
    },
    { validator: this._checkPasswords }
  )

  countries: Country[] =[
    {
      name: 'Argentina',
      provinces: ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Chaco']
    },
    {
      name: 'Chile',
      provinces: ['Arica', 'Los Andes', 'Valparaiso', 'Santiago', 'Valdivia']
    },
    {
      name: 'Colombia',
      provinces: ['Bolívar', 'Boyacá', 'Caldas', 'Cauca', 'Magdalena']
    },
    {
      name: 'México',
      provinces: ['Ciudad de México', 'Durango', 'Puebla', 'Sinaloa', 'Tabasco']
    },
    {
      name: 'Perú',
      provinces: ['Lima', 'Loreto', 'Pasco', 'Piura', 'Ucayali']
    }
  ];

  provinces: string[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  setProvinces() {
    this.registerForm.patchValue({province: ''});
    let country = this.countries.find( country => country.name === this.registerForm.value.country);
    this.provinces = country?.provinces || [];
  }

  onSubmit() {
    let userData: UserSignUp = {
      name: this.registerForm.value.name,
      last_name: this.registerForm.value.last_name,
      country: this.registerForm.value.country,
      province: this.registerForm.value.province,
      mail: this.registerForm.value.mail,
      phone: this.registerForm.value.phone,
      password: this.registerForm.value.password,
    }
    this._authService.signUp(userData).subscribe(
      response => {
        let token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/techs/collection']);
      }, error => {
        console.log(error);
      }
    )
  }


  _checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirm_password.value;

    return pass === confirmPass ? null : { passwordMismatch: true };
  }

  // ACCESSORS METHODS

  // nameControl

  get nameControl() {
    return this.registerForm.get('name') as FormControl;
  }

  get nameControlValid() {
    return this.nameControl.touched && !this.nameControlInvalid;
  }

  get nameControlInvalid() {
    return this.nameControl.touched && (this.nameControl.hasError('required') || this.nameControl.hasError('maxlength'));
  }

  // last_name

  get last_nameControl() {
    return this.registerForm.get('last_name') as FormControl;
  }

  get last_nameControlValid() {
    return this.last_nameControl.touched && !this.last_nameControlInvalid;
  }

  get last_nameControlInvalid() {
    return this.last_nameControl.touched && (this.last_nameControl.hasError('required') || this.last_nameControl.hasError('maxlenght'));
  }

  // country

  get countryControl() {
    return this.registerForm.get('country') as FormControl;
  }

  get countryControlValid() {
    return this.countryControl.touched && !this.countryControlInvalid;
  }

  get countryControlInvalid() {
    return this.countryControl.touched && this.countryControl.hasError('required');
  }

  // province

  get provinceControl() {
    return this.registerForm.get('province') as FormControl;
  }

  get provinceControlValid() {
    return this.provinceControl.touched && !this.provinceControlInvalid;
  }

  get provinceControlInvalid() {
    return this.provinceControl.touched && this.provinceControl.hasError('required');
  }

  // mail

  get mailControl() {
    return this.registerForm.get('mail') as FormControl;
  }

  get mailControlValid() {
    return this.mailControl.touched && !this.mailControlInvalid;
  }

  get mailControlInvalid() {
    return (
      this.mailControl.touched &&
      (this.mailControl.hasError('required') || this.mailControl.hasError('email'))
    );
  }

  // phone

  get phoneControl() {
    return this.registerForm.get('phone') as FormControl;
  }

  get phoneControlValid() {
    return this.phoneControl.touched && !this.phoneControlInvalid;
  }

  get phoneControlInvalid() {
    return this.phoneControl.touched && (this.phoneControl.hasError('required') || this.phoneControl.hasError('min') || this.phoneControl.hasError('max'));
  }

  // password

  get passwordControl() {
    return this.registerForm.get('password') as FormControl;
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

  // confirm_password

  get confirm_passwordControl() {
    return this.registerForm.get('confirm_password') as FormControl;
  }

  get confirm_passwordControlValid() {
    return this.confirm_passwordControl.touched && !this.confirm_passwordControlInvalid;
  }

  get confirm_passwordControlInvalid() {
    return (
      this.confirm_passwordControl.touched &&
      (this.confirm_passwordControl.hasError('required') ||
        this.confirm_passwordControl.hasError('minlength') ||
        this.registerForm.hasError('passwordMismatch'))
    );
  }

}
