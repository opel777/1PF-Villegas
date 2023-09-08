import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import {  InscripcionWithCursoAndAlumno } from './model';
import { Observable } from 'rxjs';
import { selectInscripciones } from './store/inscripciones.selectors';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesFormDialogComponent } from './components/inscripciones-form-dialog/inscripciones-form-dialog.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit{
  displayedColumns=['id','name','curso','actions'];
  inscripciones$: Observable<InscripcionWithCursoAndAlumno[]>;

  constructor(private store:Store, private matDialog: MatDialog){
     this.inscripciones$ = this.store.select(selectInscripciones)
  }

  onAdd(): void{
    this.matDialog.open(InscripcionesFormDialogComponent);
  }
  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
  onDeleteInscripcion(id: number) {
    this.store.dispatch(InscripcionesActions.deleteInscripcionesOption({ id }));
    
  }
  trackByFn(index: any, item: any) {
    return index
}
}
