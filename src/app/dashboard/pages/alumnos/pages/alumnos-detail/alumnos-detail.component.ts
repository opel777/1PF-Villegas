import { Component } from '@angular/core';
import { Alumno } from '../../model';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',

})
export class AlumnosDetailComponent {
  public alumno:Alumno|null=null
constructor(private ActivatedRoute:ActivatedRoute,private router:Router,private notification:NotifierService){
  console.log(this.ActivatedRoute.snapshot.params['id']),
  console.log(this.ActivatedRoute.snapshot.paramMap.get('id'))
  if(!Number(this.ActivatedRoute.snapshot.params['id'])){
    this.router.navigate(['dashboard','alumnos'])
    this.notification.showError(`${this.ActivatedRoute.snapshot.params['id']}no es un ID  o ruta Valido`)
  }
}
}
