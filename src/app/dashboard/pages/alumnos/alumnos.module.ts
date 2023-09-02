import { NgModule } from "@angular/core";
import { AlumnosComponent } from "./alumnos.component";
import { AlumnoFormDialogComponent } from "./components/alumno-form-dialog/alumno-form-dialog.component";
import { AlumnoTableComponent } from "./components/alumno-table/alumno-table.component";
import { AlumnosDetailComponent } from "./pages/alumnos-detail/alumnos-detail.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlumnosRoutingModule } from "./alumnos-routing.module";
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from "@ngrx/store";



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
    ReactiveFormsModule,
    AlumnosRoutingModule,
   
  ]
})
export class AlumnosModule { }
