import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { InscripcionesActions } from "../../store/inscripciones.actions";
import { Observable } from 'rxjs';
import { Alumno } from "../../../alumnos/model";
import { selectAlumnoOptions, selectCursoOptions } from "../../store/inscripciones.selectors";
import { Cursos } from "../../../cursos/model";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-inscripciones-form-dialog',
    templateUrl: './inscripciones-form-dialog.component.html',
    styleUrls: ['./inscripciones-form-dialog.component.scss']
  })

  export class InscripcionesFormDialogComponent implements OnInit{

   cursoIdControl = new FormControl(null,Validators.required);
   alumnoIdControl = new FormControl(null,Validators.required);

     inscripcionesForm =new FormGroup({
      cursoId:this.cursoIdControl,
      alumnoId:this.alumnoIdControl
     })

     alumnosOption$: Observable<Alumno[]>;
     cursosOption$: Observable<Cursos[]>

     constructor (private store :Store, private matDialogRef: MatDialogRef<InscripcionesFormDialogComponent> ){
      this.alumnosOption$ = this.store.select(selectAlumnoOptions);
      this.cursosOption$ = this.store.select(selectCursoOptions)
     }

  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadCursosOption());
    this.store.dispatch(InscripcionesActions.loadAlumnosOption());
  }

  onSubmit(): void{
    if(this.inscripcionesForm.invalid){
      this.inscripcionesForm.markAllAsTouched();
    }else {

      this.store.dispatch(InscripcionesActions.createInscripcion({payload : this.inscripcionesForm.getRawValue()}));
      this.matDialogRef.close();
    }
  }
  }