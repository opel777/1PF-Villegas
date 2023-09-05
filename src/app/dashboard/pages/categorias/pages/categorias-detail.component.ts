import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../cursos/cursos.service';
import { Cursos } from "../../cursos/model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CategoriasActions } from "../store/categorias.actions";
import { selectCategoriasDetailName } from "../store/categorias.selectors";



@Component({
  selector: 'app-categorias-detail',
  templateUrl: './categorias-detail.component.html',
  styleUrls: ['./categorias-detail.component.scss']

})
export class CategoriasDetailComponent implements OnInit {
  displayedColumns = ['id','name'];
  cursos: Cursos[]=[];
  categoriasName$: Observable<string | undefined> ;
  
constructor(
   private activatedRoute: ActivatedRoute,
   private cursosService : CursosService,
   private store: Store,)
   {
  console.log(this.activatedRoute.snapshot.params);
  this.categoriasName$ = this.store.select(selectCategoriasDetailName);
}
  ngOnInit(): void {
    this.store.dispatch(CategoriasActions.loadCategoriasDetail({categoriasId:this.activatedRoute.snapshot.params['id']}))
    this.cursosService.getCursosByCategoryId(this.activatedRoute.snapshot.params['id']).subscribe({
    next: (cursos)=> (this.cursos = cursos),
  })
  }
}
