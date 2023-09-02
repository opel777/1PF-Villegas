import { createActionGroup, emptyProps } from '@ngrx/store';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    
    
  }
});
