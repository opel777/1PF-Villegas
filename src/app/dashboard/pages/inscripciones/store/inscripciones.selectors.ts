import { createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.State>(
  fromInscripciones.inscripcionesFeatureKey
);


export const selectInscripciones = createSelector(selectInscripcionesState,(state)=> state.data)

export const selectAlumnoOptions = createSelector(selectInscripcionesState,(state)=> state.alumnosOptions)

export const selectCursoOptions = createSelector(selectInscripcionesState,(state)=> state.cursosOptions)