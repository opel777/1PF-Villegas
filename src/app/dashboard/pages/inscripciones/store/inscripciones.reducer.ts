import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionWithCursoAndAlumno } from '../model';
import { Alumno } from '../../alumnos/model';
import { Cursos } from '../../cursos/model';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  data: InscripcionWithCursoAndAlumno[];
  alumnosOptions:Alumno[],
  cursosOptions:Cursos[],
  loading:boolean;
  error:unknown

}

export const initialState: State = {
data:[],
alumnosOptions:[],
cursosOptions:[],
loading:false,
error:null
};

export const reducer = createReducer(
  initialState,

  on(InscripcionesActions.loadInscripciones, state => {
    return {
      ...state,
      loading:true
    }
  }),

  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      loading:false
    }
  }),

  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading:false
    }
  }),


  on(InscripcionesActions.loadAlumnosOption,(state)=> state),
  on(InscripcionesActions.loadAlumnosOptionSuccess,(state, action)=>{
  return {
    ...state,
    alumnosOptions: action.data,
  }
}),

on(InscripcionesActions.loadCursosOption,(state)=> state),
  on(InscripcionesActions.loadCursosOptionSuccess,(state, action)=>{
  return {
    ...state,
    cursosOptions: action.data,
  }
}),
on(InscripcionesActions.deleteInscripcionesOption, (state, { id }) => ({
  ...state,
  data: state.data.filter(inscripciones => inscripciones.id !== id),
}))

);


export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

