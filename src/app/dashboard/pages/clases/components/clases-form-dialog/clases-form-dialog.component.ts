import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Materia } from '../../model';

@Component({
  selector: 'app-clases-form-dialog',
  templateUrl: './clases-form-dialog.component.html',
  styleUrls: ['./clases-form-dialog.component.scss']
})
export class ClasesFormDialogComponent {
  editingClase?:Materia;
  titleControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  nameteacherControl = new FormControl<string | null>(null,[Validators.required,Validators.minLength(2)]);
  
  
  
    clasesForm = new FormGroup({
      title: this.titleControl,
       nameteacher: this.nameteacherControl,
      
    });
  
  constructor(private dialogRef:MatDialogRef<ClasesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?:Materia,
    ){
      if(this.data){
       this.editingClase = this.data
        this.titleControl.setValue(this.data.title);
        this.nameteacherControl.setValue(this.data.nameteacher);
      
      }
  }
    onSubmit():void{
     
      if(this.clasesForm.invalid){
        this.clasesForm.markAllAsTouched()
      } else {
        this.dialogRef.close(this.clasesForm.value);
      }
      
    }
}
