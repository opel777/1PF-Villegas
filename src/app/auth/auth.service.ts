import { Injectable } from "@angular/core";
import { LoginPayload } from "./models";
import { BehaviorSubject, Observable, map } from "rxjs";
import { User } from "../dashboard/pages/users/model";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router"; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Store } from "@ngrx/store";
import { AuthActions } from "../store/auth/auth.actions";


@Injectable({ providedIn: 'root' })
export class AuthService {
  // private _authUser$ = new BehaviorSubject<User | null>(null);
  // public authUser$ = this._authUser$.asObservable();

  constructor(
    private notifier: NotifierService,
    private router: Router, 
    private HttpClient: HttpClient,
    private store:Store) {}

  isAutenticated(): Observable<boolean> {
    // return this.authUser$.pipe(take(1), map((user) => !!user));
    return this.HttpClient.get<User[]>(environment.baseApiUrl + '/users',{
      params:{
        token:localStorage.getItem('token') || '',
      }
    }).pipe(map((usersResult)=>{

      if(usersResult.length){
        const authUser = usersResult[0];
        // this._authUser$.next(authUser);
        this.store.dispatch(AuthActions.setAuthUser({payload : authUser}))
      }
      return !!usersResult.length
    }))
  }

  login(payLoad: LoginPayload): void {
   this.HttpClient.get<User[]>(environment.baseApiUrl + '/users',{
    params:{
    email:payLoad.email || '',
    password:payLoad.password || ''
   }
  }).subscribe({
    next:(response)=>{
      if (response.length) {
        const authUser = response[0];
        // this._authUser$.next(authUser);
        this.router.navigate(['/dashboard/home']); 
        localStorage.setItem('token', authUser.token);
    
        
      } else {
        this.notifier.showError('Email o Contraseña invalida');
        // this._authUser$.next(null);
        this.store.dispatch(AuthActions.setAuthUser({payload:null}))
      }

    },
    error:(err)=>{
      if(err instanceof HttpErrorResponse){
        let message = 'Ocurrio un error inesperado';
        if(err.status === 500){

        }
        if(err.status === 401){
          message = 'Ocurrio un error inesperado'
        }
        this.notifier.showError(message)
      }
    }
   })

   
  }
  public logout():void {
    this.store.dispatch(AuthActions.setAuthUser({payload:null}))
  }
}
