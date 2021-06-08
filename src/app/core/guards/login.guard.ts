import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {

    if (this.authService.getToken()) {
      this.router.navigate(['/techs/collection']);
    }

    return of(true);
  }
  
}
