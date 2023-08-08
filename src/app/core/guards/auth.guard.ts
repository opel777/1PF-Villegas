
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';



export const authGuard: CanActivateFn = (route, state) => {
    console.log('paso por el guard')
   
  
  const authService = new AuthService();
  const router = new Router();

  return authService.isAutenticated().pipe(
    map((isAuth) => {
      // SI ESTA AUTENTICADO LO DEJO VER LA PANTALLA...
      if (isAuth) return true;

      // SI NO ESTA AUTENTICADO LO MANDO AL LOGIN
      return router.createUrlTree(['/auth/login']);
    })
  );
};
