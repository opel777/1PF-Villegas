import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { InscripcionWithCursoAndAlumno } from '../model';
import { HttpErrorResponse } from '@angular/common/http';
import { Cursos } from '../../cursos/model';
import { Alumno } from '../../alumnos/model';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: InscripcionWithCursoAndAlumno[] }>(),
    'Load Inscripciones Failure': props<{ error: HttpErrorResponse }>(),

    'Load Cursos Option': emptyProps(),
    'Load Cursos Option Success' : props<{data:Cursos[]}>(),
    'Load Cursos Option Failure': props<{ error: HttpErrorResponse }>(),

    'Load Alumnos Option': emptyProps(),
    'Load Alumnos Option Success' : props<{data:Alumno[]}>(),
    'Load Alumnos Option Failure': props<{ error: HttpErrorResponse }>(),

  }
});
