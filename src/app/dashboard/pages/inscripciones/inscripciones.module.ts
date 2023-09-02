import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesDetailComponent } from './pages/inscripciones-detail.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDetailComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(inscripcionesFeature),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
