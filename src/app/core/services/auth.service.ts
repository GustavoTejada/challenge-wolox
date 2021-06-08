import { Injectable } from '@angular/core';
import { Global } from '../../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSignUp } from '../interfaces/UserSignUp.interface';
import { Observable } from 'rxjs';
import { UserLogin } from '../interfaces/UserLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl: string = Global.baseUrl;
  public headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private _http: HttpClient
  ) { }

  signUp(params: UserSignUp):Observable<any> {
    let userData = JSON.stringify(params);

    return this._http.post(this.baseUrl + "signup", userData, {
      headers: this.headers
    })
  }

  login(params: UserLogin):Observable<any> {
    let userData = JSON.stringify(params);

    return this._http.post(this.baseUrl + "login", userData, {
      headers: this.headers
    })
  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token != undefined) {
        return token;
    }

    return null;
}
}
