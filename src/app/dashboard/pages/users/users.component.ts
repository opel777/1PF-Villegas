import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
constructor(
  private matDialog: MatDialog
){}

onCreateUser():void{
 const dialogRef = this.matDialog.open(UserFormDialogComponent);
 dialogRef.afterClosed().subscribe({
  next:(v) =>{
    if(v){
      console.log('Recibimos el valor:',v);
    } else {
      console.log('Se cancelo');
    }
    
  }
 })
}
}
