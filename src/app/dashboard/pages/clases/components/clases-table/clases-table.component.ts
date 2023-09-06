import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Materia } from '../../model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-clases-table',
  templateUrl: './clases-table.component.html',
  styleUrls: ['./clases-table.component.scss']
})
export class ClasesTableComponent {
  public isAdmin$ : Observable<boolean>

  constructor(private store:Store){
    this.isAdmin$ = this.store.select(selectIsAdmin)
  }
  displayedColumns: string[] = ['id', 'title', 'nameteacher','actions'];
  @Input()
  dataSource: Materia[]= [];

  @Output()
  deleteMateria = new EventEmitter<Materia>();

  @Output()
  editMateria = new EventEmitter<Materia>();

}
