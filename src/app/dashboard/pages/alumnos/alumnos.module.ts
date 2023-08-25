import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AlumnosComponent } from './alumnos.component';
import { FormsModule } from '@angular/forms';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoFormDialogComponent } from './components/alumno-form-dialog/alumno-form-dialog.component';
import { AlumnoTableComponent } from './components/alumno-table/alumno-table.component';
import { AlumnosDetailComponent } from './pages/alumnos-detail/alumnos-detail.component';




@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoFormDialogComponent,
    AlumnoTableComponent,
    AlumnosDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    AlumnosRoutingModule 
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule { }
