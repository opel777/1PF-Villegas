import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Materia } from '../../model';

@Component({
  selector: 'app-clases-table',
  templateUrl: './clases-table.component.html',
  styleUrls: ['./clases-table.component.scss']
})
export class ClasesTableComponent {
  displayedColumns: string[] = ['id', 'name', 'nameteacher','actions'];
  @Input()
  dataSource: Materia[]= [];

  @Output()
  deleteMateria = new EventEmitter<Materia>();

  @Output()
  editMateria = new EventEmitter<Materia>();

}
