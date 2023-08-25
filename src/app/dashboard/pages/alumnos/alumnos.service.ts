import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environment';
import { Alumno, CreateAlumnoData, UpdateAlumnoData } from './model';


@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private _users$ = new BehaviorSubject<Alumno[]>([]);
  private users$ = this._users$.asObservable();


  private _isLoading$ = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();

  constructor(private notifier: NotifierService, private httpClient: HttpClient) {}

  loadAlumno(): void {
    
    this._isLoading$.next(true);
    this.httpClient.get<Alumno[]>(environment.baseApiUrl + '/alumnos', {
      headers: new HttpHeaders({
        'token': '12345678910'
      }),
      
    }).subscribe({
      next: (response) => {
        // SI TODO SALE OK...
        this._users$.next(response);
      },
      error: () => {
        // SI TODO SALE MAL
        this.notifier.showError('Error al cargar los alumnos');
      },
      complete: () => {
        this._isLoading$.next(false);
        // SE COMPLETO EL OBSERVABLE
      },
    })

  }

  getAlumno(): Observable<Alumno[]> {
    return this.users$;
  }

  getAlumnoById(id: number) {
    return this.users$.pipe(
      take(1),
      map(( users ) =>  users.find((u) => u.id === id)),
    )
  }

  createAlumno(payload: CreateAlumnoData): void {
    

    const token = generateRandomString(20);

    this.httpClient.post<Alumno>(environment.baseApiUrl  + '/alumnos', { ...payload, token })
      .pipe(
        mergeMap((userCreate) => this.users$.pipe(
          take(1),
          map(
            (arrayActual) => [...arrayActual, userCreate])
          )
        )
      )
      .subscribe({
        next: (arrayActualizado) => {
          this._users$.next(arrayActualizado);
        }
      })
  }

  updateAlumnoById(id: number, usuarioActualizado: UpdateAlumnoData): void {
    
    this.httpClient.put(environment.baseApiUrl + '/alumnos/' + id, usuarioActualizado).subscribe({
      next: () => this.loadAlumno(),
    })

  }

  deleteAlumnoById(id: number): void {
 
    this.httpClient.delete(environment.baseApiUrl + '/alumnos/' + id)
      .pipe(
       
      ).subscribe({
        next: (arrayActualizado) => this.loadAlumno(),
      })



  }
}