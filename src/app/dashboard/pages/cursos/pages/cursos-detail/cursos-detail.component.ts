import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styles: [
  ]
})
export class CursosDetailComponent implements OnInit{
  userId: number = 0; 
  userDetails: any; 
  
  constructor(private route: ActivatedRoute, private cursosService: CursosService) { }
  
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.userId = +idParam; 
        this.cursosService.getCursosById(this.userId).subscribe(user => {
          this.userDetails = user;
        });
      } 
  })
  }
}
