import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../alumnos.service';

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',

})
export class AlumnosDetailComponent implements OnInit{
  userId: number = 0; 
  userDetails: any; 
  
  constructor(private route: ActivatedRoute, private alumnosService: AlumnosService) { }
  
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.userId = +idParam; 
        this.alumnosService.getAlumnoById(this.userId).subscribe(user => {
          this.userDetails = user;
        });
      } 
  })
  }
}
