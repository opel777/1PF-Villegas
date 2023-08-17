import { Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAutenticated().pipe(
      map((isAuth) => {
        if (isAuth) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth/login']);
        }
      })
    );
  }
}
