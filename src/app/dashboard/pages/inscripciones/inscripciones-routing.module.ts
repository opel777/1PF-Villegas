import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: InscripcionesComponent,
      },
      // {
      //     path: 'inscripciones/:id',
      //     component: InscripcionesDetailComponent,
      // },
  ])
  ]
})
export class InscripcionesRoutingModule { }
