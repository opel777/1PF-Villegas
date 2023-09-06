import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environment';
import { CreateCursosData, Cursos, UpdateCursosData } from './model';
import { Materia } from '../clases/model';


@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private _users$ = new BehaviorSubject<Cursos[]>([]);
  private users$ = this._users$.asObservable();


  private _isLoading$ = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();

  constructor(private notifier: NotifierService, private httpClient: HttpClient) {}

  loadCursos(): void {
    
    this._isLoading$.next(true);
    this.httpClient.get<Cursos[]>(environment.baseApiUrl + '/cursos', {
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

  getCursos(): Observable<Cursos[]> {
    return this.users$;
  }

  getCursosById(id: number) {
    return this.users$.pipe(
      take(1),
      map(( users ) =>  users.find((u) => u.id === id)),
    )
  }
  

  createCursos(payload: CreateCursosData): void {
    

    const token = generateRandomString(20);

    this.httpClient.post<Cursos>(environment.baseApiUrl  + '/cursos', { ...payload, token })
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

  updateCursosById(id: number, usuarioActualizado: UpdateCursosData): void {
    
    this.httpClient.put(environment.baseApiUrl + '/cursos/' + id, usuarioActualizado).subscribe({
      next: () => this.loadCursos(),
    })

  }

  deleteCursosById(id: number): void {
 
    this.httpClient.delete(environment.baseApiUrl + '/cursos/' + id)
      .pipe(
       
      ).subscribe({
        next: (arrayActualizado) => this.loadCursos(),
      })
  }

  getCursosByCategoryId(categoryId : number):Observable<Cursos[]>{
return this.httpClient.get<Cursos[]>(environment.baseApiUrl + `/cursos?categoryId=${categoryId}`)
  }

  getMateriaByCategoryId(categoryId : number):Observable<Materia[]>{
    return this.httpClient.get<Materia[]>(environment.baseApiUrl + `/materias?categoryId=${categoryId}`)
      }
}