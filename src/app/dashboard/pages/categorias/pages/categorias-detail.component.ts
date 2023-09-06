import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../cursos/cursos.service';
import { Cursos } from "../../cursos/model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CategoriasActions } from "../store/categorias.actions";
import { selectCategoriasDetailName } from "../store/categorias.selectors";
import { Materia } from "../../clases/model";



@Component({
  selector: 'app-categorias-detail',
  templateUrl: './categorias-detail.component.html',
  styleUrls: ['./categorias-detail.component.scss']

})
export class CategoriasDetailComponent implements OnInit {
  displayedColumns = ['id','name'];
  materias:Materia[]=[];
  cursos: Cursos[]=[];
  categoriasName$: Observable<string | undefined> ;
  // categoriaSeleccionada:string | null = null;
  
constructor(
   private activatedRoute: ActivatedRoute,
   private cursosService : CursosService,
   private store: Store,)
   {
  console.log(this.activatedRoute.snapshot.params);
  this.categoriasName$ = this.store.select(selectCategoriasDetailName);
}
  ngOnInit(): void {
    // const tipo = this.activatedRoute.snapshot.params['tipo'];
    
    this.store.dispatch(CategoriasActions.loadCategoriasDetail({categoriasId:this.activatedRoute.snapshot.params['id']}))
    // this.cursosService.getCursosByCategoryId(this.activatedRoute.snapshot.params['id']).subscribe({
    // next: (cursos)=> (this.cursos = cursos),
    this.cursosService.getMateriaByCategoryId(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (materias)=> (this.materias = materias),
  })
  this.store.dispatch(CategoriasActions.loadCategoriasDetail({categoriasId:this.activatedRoute.snapshot.params['id']}))
  this.cursosService.getCursosByCategoryId(this.activatedRoute.snapshot.params['id']).subscribe({
  next: (cursos)=> (this.cursos = cursos),
  })
}
}