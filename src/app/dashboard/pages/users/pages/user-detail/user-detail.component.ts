import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model';
import { NotifierService } from '../../../../../core/services/notifier.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent implements OnInit{


userId: number = 0; 
userDetails: any; 

constructor(private route: ActivatedRoute, private userService: UserService) { }

ngOnInit(): void {

  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam !== null) {
      this.userId = +idParam; 
      this.userService.getUserById(this.userId).subscribe(user => {
        this.userDetails = user;
      });
    } 
})
}
}
