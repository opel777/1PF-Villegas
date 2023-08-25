import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environment';
import { CreateMateriaData, Materia, UpdateMateriaData } from './model';



@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  private _users$ = new BehaviorSubject<Materia[]>([]);
  private users$ = this._users$.asObservable();


  private _isLoading$ = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();

  constructor(private notifier: NotifierService, private httpClient: HttpClient) {}

  loadClase(): void {
    
    this._isLoading$.next(true);
    this.httpClient.get<Materia[]>(environment.baseApiUrl + '/materias', {
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
        this.notifier.showError('Error al cargar los cursos');
      },
      complete: () => {
        this._isLoading$.next(false);
        // SE COMPLETO EL OBSERVABLE
      },
    })

  }

  getClase(): Observable<Materia[]> {
    return this.users$;
  }

  getClaseById(id: number) {
    return this.users$.pipe(
      take(1),
      map(( users ) =>  users.find((u) => u.id === id)),
    )
  }
  

  createClase(payload: CreateMateriaData): void {
    

    const token = generateRandomString(20);

    this.httpClient.post<Materia>(environment.baseApiUrl  + '/materias', { ...payload, token })
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

  updateClaseById(id: number, usuarioActualizado: UpdateMateriaData): void {
    
    this.httpClient.put(environment.baseApiUrl + '/materias/' + id, usuarioActualizado).subscribe({
      next: () => this.loadClase(),
    })

  }

  deleteClaseById(id: number): void {
 
    this.httpClient.delete(environment.baseApiUrl + '/materias/' + id)
      .pipe(
       
      ).subscribe({
        next: (arrayActualizado) => this.loadClase(),
      })



  }
}