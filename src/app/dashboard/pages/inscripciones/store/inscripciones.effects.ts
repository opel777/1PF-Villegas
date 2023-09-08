import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { HttpClient } from '@angular/common/http';
import { CreateInscripcionPayload, Inscripcion, InscripcionWithCursoAndAlumno } from '../model';
import { environment } from 'src/environments/environment';
import { Alumno } from '../../alumnos/model';
import { Cursos } from '../../cursos/model';
import { Store } from '@ngrx/store';


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

  //// carga de alumnos///
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


  ////carga de Cursos/////

  loadCursosOption$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadCursosOption),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getCursosOptions().pipe(
          map(data => InscripcionesActions.loadCursosOptionSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadCursosOptionFailure({ error }))))
      )
    );
  });


  ////creacion de curso////

createInscripcion$ = createEffect(() => {
  return this.actions$.pipe(

    ofType(InscripcionesActions.createInscripcion),
    concatMap((action) =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      this.createInscripcion(action.payload).pipe(
        map(data => InscripcionesActions.createInscripcionSuccess({ data })),
        catchError(error => of(InscripcionesActions.loadCursosOptionFailure({ error }))))
    )
  );
}); 
////eliminando  curso////

deleteInscripcionInServer$= createEffect(() => {
  return this.actions$.pipe(

    ofType(InscripcionesActions.deleteInscripcionesOption),
    concatMap((action) =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      this.deleteInscripcionInServer(action.id).pipe(
        map(data => InscripcionesActions.loadInscripcionesSuccess({ data })),
        catchError(error => of(InscripcionesActions.deleteInscripcionesOptionFailure({ error }))))
    )
  );
}); 



////creando recarga con datos ///

createInscripcionSuccess$ = createEffect(() => {
  return this.actions$.pipe(

    ofType(InscripcionesActions.createInscripcionSuccess),
  map(()=> this.store.dispatch(InscripcionesActions.loadInscripciones()))
  );
}, {dispatch: false});

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store : Store
   ){}

  private getInscripcionFromDB(): Observable<InscripcionWithCursoAndAlumno[]>{
    return this.httpClient.get<InscripcionWithCursoAndAlumno[]>(environment.baseApiUrl + '/inscripciones?_expand=curso&_expand=alumno')
  }
  private getAlumnosOptions(): Observable<Alumno[]> {
   return this.httpClient.get<Alumno[]>(environment.baseApiUrl + '/alumnos')
  }

  private getCursosOptions(): Observable<Cursos[]> {
    return this.httpClient.get<Cursos[]>(environment.baseApiUrl + '/cursos')
   }

   private createInscripcion(payload : CreateInscripcionPayload): Observable <Inscripcion[]> {
    return this.httpClient.post<Inscripcion[]>(environment.baseApiUrl + '/inscripciones', payload)
   }

   private deleteInscripcionInServer(id: number): Observable<InscripcionWithCursoAndAlumno[]> {
    return this.httpClient.delete<InscripcionWithCursoAndAlumno[]>(environment.baseApiUrl + '/inscripciones/' + id);
  }
}