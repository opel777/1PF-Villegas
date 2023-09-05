import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { HttpClient } from '@angular/common/http';
import { InscripcionWithCursoAndAlumno } from '../model';
import { environment } from 'src/environments/environment';
import { Alumno } from '../../alumnos/model';


@Injectable()
export class InscripcionesEffects {

  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadInscripciones),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getInscripcionFromDB().pipe(
          map(data => InscripcionesActions.loadInscripcionesSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadInscripcionesFailure({ error }))))
      )
    );
  });

  loadAlumnosOption$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadAlumnosOption),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getAlumnosOptions().pipe(
          map(data => InscripcionesActions.loadAlumnosOptionSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadAlumnosOptionFailure({ error }))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
   ){}

  private getInscripcionFromDB(): Observable<InscripcionWithCursoAndAlumno[]>{
    return this.httpClient.get<InscripcionWithCursoAndAlumno[]>(environment.baseApiUrl + '/inscripciones?_expand=curso&_expand=alumno')
  }
  private getAlumnosOptions(): Observable<Alumno[]> {
   return this.httpClient.get<Alumno[]>(environment.baseApiUrl + '/alumnos')
  }
}
