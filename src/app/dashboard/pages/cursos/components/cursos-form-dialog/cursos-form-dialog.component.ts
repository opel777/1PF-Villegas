import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cursos } from '../../model';


@Component({
  selector: 'app-cursos-form-dialog',
  templateUrl: './cursos-form-dialog.component.html',
  styleUrls: ['./cursos-form-dialog.component.scss']
})
export class CursosFormDialogComponent {
  nameControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  descriptionControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  
  
  
    cursosForm = new FormGroup({
       name: this.nameControl,
       description: this.descriptionControl,
      
    });
  
  constructor(private dialogRef:MatDialogRef<CursosFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?:Cursos,
    ){
      if(this.data){
        this.nameControl.setValue(this.data.name);
        this.descriptionControl.setValue(this.data.description);
      
      }
  }
    onSubmit():void{
      // alert(JSON.stringify(this.userForm.value))
      if(this.cursosForm.invalid){
        this.cursosForm.markAllAsTouched()
      } else {
        this.dialogRef.close(this.cursosForm.value);
      }
      
    }
}
