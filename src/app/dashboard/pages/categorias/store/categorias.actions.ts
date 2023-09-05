import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CategoriasActions = createActionGroup({
  source: 'Categorias',
  events: {
    'Load Categorias': emptyProps(),
    
    'Load CategoriasDetail' : props<{categoriasId:number}>(),
  }
});
