import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategorias from './categorias.reducer';

export const selectCategoriasState = createFeatureSelector<fromCategorias.State>(
  fromCategorias.categoriasFeatureKey
);

export const selectCategoriasArray = createSelector(selectCategoriasState,(state)=>state.categorias)

export const selectCategoriasDetailName = createSelector(selectCategoriasState,(state=>state.categoriasDetail?.name))