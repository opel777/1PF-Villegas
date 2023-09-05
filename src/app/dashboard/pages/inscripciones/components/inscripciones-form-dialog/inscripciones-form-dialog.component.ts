import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { InscripcionesActions } from "../../store/inscripciones.actions";
import { Observable } from 'rxjs';
import { Alumno } from "../../../alumnos/model";
import { selectAlumnoOptions } from "../../store/inscripciones.selectors";

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

     constructor (private store :Store ){
      this.alumnosOption$ = this.store.select(selectAlumnoOptions);
     }

  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadCursosOption());
    this.store.dispatch(InscripcionesActions.loadAlumnosOption());
  }
  }