import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from './model';
import { selectInscripcionesArray } from './store/inscripciones.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit{

  inscripciones$:Observable<Inscripcion[]>

  constructor(private store: Store){
    this.inscripciones$=this.store.select(selectInscripcionesArray)
  }
  displayedColumns=['id','name','actions']



  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
  
}
