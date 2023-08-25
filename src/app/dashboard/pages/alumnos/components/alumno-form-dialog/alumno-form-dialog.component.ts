import { Component, Inject } from '@angular/core';
import { Alumno } from '../../model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-form-dialog',
  templateUrl: './alumno-form-dialog.component.html',
  styleUrls: ['./alumno-form-dialog.component.scss']
})
export class AlumnoFormDialogComponent {
  editingAlumno?:Alumno;


  nameControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  surnameControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  emailControl = new FormControl<string | null>(null,[Validators.required,Validators.pattern(/^\w+([\-\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]);
  passwordControl = new FormControl<string | null>(null,[Validators.required]);
  
  
    alumnoForm = new FormGroup({
       name: this.nameControl,
       surname: this.surnameControl,
       email: this.emailControl,
       password: this.passwordControl
    });
  
  constructor(private dialogRef:MatDialogRef<AlumnoFormDialogComponent >,
    @Inject(MAT_DIALOG_DATA) private data?:Alumno,
    ){
      if(this.data){
        this.editingAlumno = this.data;
        this.nameControl.setValue(this.data.name);
        this.surnameControl.setValue(this.data.surname);
        this.emailControl.setValue(this.data.email);
        this.passwordControl.setValue(this.data.password);
      }
  }
    onSubmit():void{
      // alert(JSON.stringify(this.userForm.value))
      if(this.alumnoForm.invalid){
        this.alumnoForm.markAllAsTouched()
      } else {
        this.dialogRef.close(this.alumnoForm.value);
      }
      
    }
}
