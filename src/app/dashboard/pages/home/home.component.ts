import { Component } from '@angular/core';
import { Cursos } from '../cursos/model';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cursos: Cursos[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.loadCursos()
    this.cursosService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

}




