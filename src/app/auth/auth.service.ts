import { Injectable } from "@angular/core";
import { LoginPayload } from "./models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { User } from "../dashboard/pages/users/model";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router"; // Asegúrate de que la ruta sea correcta

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private notifier: NotifierService, private router: Router) {}

  isAutenticated(): Observable<boolean> {
    return this.authUser$.pipe(take(1), map((user) => !!user));
  }

  login(payLoad: LoginPayload): void {
    const MOCK_USER: User = {
      id: 50,
      name: 'Gustavo',
      surname: 'Villegas',
      email: 'vi@hotmail.com',
      password: '123456'
    }

    if (payLoad.email === MOCK_USER.email && payLoad.password === MOCK_USER.password) {
      this._authUser$.next(MOCK_USER);
      this.router.navigate(['/dashboard']); // Navegación aquí dentro del servicio
    } else {
      this.notifier.showError('Email o Contraseña invalida');
      this._authUser$.next(null);
    }
  }
}
