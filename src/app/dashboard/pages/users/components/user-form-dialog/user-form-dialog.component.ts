import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {
  nameControl = new FormControl(null,[Validators.required,Validators.minLength(2)]);
  surnameControl = new FormControl(null,[Validators.required,Validators.minLength(2)]);
  emailControl = new FormControl(null,[Validators.required,Validators.pattern(/^\w+([\-\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]);
  passwordControl = new FormControl(null,[Validators.required]);
  
  
    userForm = new FormGroup({
       name: this.nameControl,
       surname: this.surnameControl,
       email: this.emailControl,
       password: this.passwordControl
    });
  
  constructor(private dialogRef:MatDialogRef<UserFormDialogComponent >){

  }
    onSubmit():void{
      // alert(JSON.stringify(this.userForm.value))
      if(this.userForm.invalid){
        this,this.userForm.markAllAsTouched()
      } else {
        this.dialogRef.close(this.userForm.value);
      }
      
    }
}
