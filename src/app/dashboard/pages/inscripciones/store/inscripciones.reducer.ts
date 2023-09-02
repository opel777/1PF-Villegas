import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { Inscripcion } from '../model';
import { INSCRIPCIONES_MOCK } from '../mocks';


export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
inscripciones:Inscripcion[]
}

export const initialState: State = {
inscripciones:[]
};

export const reducer = createReducer(
  initialState,


  //loadInscripciones
  on(InscripcionesActions.loadInscripciones, state => {
    return{
      inscripciones: INSCRIPCIONES_MOCK,
    }
  }),

);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

