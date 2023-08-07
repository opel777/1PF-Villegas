import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosFormDialogComponent } from './components/cursos-form-dialog/cursos-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';
import { CursosTableComponent } from './components/cursos-table/cursos-table.component';
import { CursosDetailComponent } from './pages/cursos-detail/cursos-detail.component';
import { CursosRoutingModule } from './cursos-routing.module';




@NgModule({
  declarations: [
    CursosComponent,
    CursosFormDialogComponent,
    CursosTableComponent,
    CursosDetailComponent
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  
    
  ]
})
export class CursosModule { }
