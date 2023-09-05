import { createFeature, createReducer, on } from '@ngrx/store';
import { CATEGORIAS_MOCK } from '../mocks';
import { CategoriasActions } from './categorias.actions';
import { Categoria } from '../model';


export const categoriasFeatureKey = 'categorias';

export interface State {
  categorias:Categoria[],
  categoriasDetail: Categoria | null,
}

export const initialState: State = {
  categorias:[],
  categoriasDetail:null,
};

export const reducer = createReducer(
  initialState,


  //loadCategorias
  on(CategoriasActions.loadCategorias, state => {
    return{
      ...state,
      categorias: CATEGORIAS_MOCK,
    }
  }),

   //loadCategoriasDetail
   on(CategoriasActions.loadCategoriasDetail,( state, action) => {
    return{
      ...state,
      categoriasDetail: CATEGORIAS_MOCK.find((i)=> i.id == action.categoriasId) || null,
    }
  }),

);

export const categoriasFeature = createFeature({
  name: categoriasFeatureKey,
  reducer,
});

