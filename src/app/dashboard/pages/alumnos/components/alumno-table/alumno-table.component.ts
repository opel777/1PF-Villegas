import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumno-table.component.html',
  styleUrls: ['./alumno-table.component.scss']
})
export class AlumnoTableComponent {
  public isAdmin$ : Observable<boolean>

  constructor(private store:Store){
    this.isAdmin$ = this.store.select(selectIsAdmin)
  }
  displayedColumns: string[] = ['id', 'fullName', 'email','actions'];
  @Input()
  dataSource: Alumno[]= [];

  @Output()
  deleteAlumno = new EventEmitter<Alumno>();

  @Output()
  editAlumno = new EventEmitter<Alumno>();
}
