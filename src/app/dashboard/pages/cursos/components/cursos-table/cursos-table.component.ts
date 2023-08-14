import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cursos } from '../../model';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss']
})
export class CursosTableComponent {
  displayedColumns: string[] = ['id', 'image','title','subtitle', 'description','actions'];
  @Input()
  dataSource: Cursos[]= [];

  @Output()
  deleteCursos = new EventEmitter<Cursos>();

  @Output()
  editCursos = new EventEmitter<Cursos>();

}
