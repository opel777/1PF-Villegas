import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasDetailComponent } from './pages/categorias-detail.component';
import { RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { categoriasFeature } from './store/categorias.reducer';
import { CategoriasEffects } from './store/categorias.effects';
import { CategoriasRoutingModule } from './categorias-routing.module';




@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriasDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(categoriasFeature),
    EffectsModule.forFeature([CategoriasEffects])
  ]
})
export class CategoriasModule { }
