import { Component } from '@angular/core';
import { User } from '../../../users/model';
import { ActivatedRoute,Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-clases-detail',
  templateUrl: './clases-detail.component.html',
  styles: [
  ]
})
export class ClasesDetailComponent {
  public user:User|null=null
constructor(private ActivatedRoute:ActivatedRoute,private router:Router,private notification:NotifierService){
  console.log(this.ActivatedRoute.snapshot.params['id']),
  console.log(this.ActivatedRoute.snapshot.paramMap.get('id'))
  if(!Number(this.ActivatedRoute.snapshot.params['id'])){
    this.router.navigate(['dashboard','users'])
    this.notification.showError(`${this.ActivatedRoute.snapshot.params['id']}no es un ID  o ruta Valido`)
  }
}
}
