import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'src/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  private baseUrl: string = Global.baseUrl;
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer' + localStorage.getItem('token'));

  constructor(private _http: HttpClient) {}

  getTechsColection():Observable<any> {
    return this._http.get(this.baseUrl + 'techs', {
      headers: this.headers
    })
  }
}
