import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cursos } from '../../model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss']
})
export class CursosTableComponent {
  public isAdmin$ : Observable<boolean>

  constructor(private store:Store){
    this.isAdmin$ = this.store.select(selectIsAdmin)
  }
  
  displayedColumns: string[] = ['id', 'image','title','subtitle', 'description','actions'];
  @Input()
  dataSource: Cursos[]= [];

  @Output()
  deleteCursos = new EventEmitter<Cursos>();

  @Output()
  editCursos = new EventEmitter<Cursos>();

}
