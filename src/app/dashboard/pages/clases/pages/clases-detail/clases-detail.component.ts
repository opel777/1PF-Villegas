import { Component, OnInit } from '@angular/core';
import { User } from '../../../users/model';
import { ActivatedRoute,Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { ClasesService } from '../../clases.service';

@Component({
  selector: 'app-clases-detail',
  templateUrl: './clases-detail.component.html',
  styles: [
  ]
})
export class ClasesDetailComponent implements OnInit{
  userId: number = 0; 
  userDetails: any; 
  
  constructor(private route: ActivatedRoute, private clasesService: ClasesService) { }
  
  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.userId = +idParam; 
        this.clasesService.getClaseById(this.userId).subscribe(user => {
          this.userDetails = user;
        });
      } 
  })
  }
}
