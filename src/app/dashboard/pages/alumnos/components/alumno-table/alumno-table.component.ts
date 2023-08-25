import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../model';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumno-table.component.html',
  styleUrls: ['./alumno-table.component.scss']
})
export class AlumnoTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email','actions'];
  @Input()
  dataSource: Alumno[]= [];

  @Output()
  deleteAlumno = new EventEmitter<Alumno>();

  @Output()
  editAlumno = new EventEmitter<Alumno>();
}
