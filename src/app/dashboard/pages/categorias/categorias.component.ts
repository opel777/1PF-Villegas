import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categoria} from './model';
import { selectCategoriasArray } from './store/categorias.selectors';
import { CategoriasActions } from './store/categorias.actions';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit{

  categorias$:Observable<Categoria[]>

  constructor(private store: Store){
    this.categorias$=this.store.select(selectCategoriasArray)
  }
  displayedColumns=['id','name','actions']



  ngOnInit(): void {
    this.store.dispatch(CategoriasActions.loadCategorias())
  }
  
}
