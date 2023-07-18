import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './model';
const ELEMENT_DATA: User[] = [
  {
    id:1,
    name:'Marcos',
    surname:'Perez',
    email:'MarcorPerez@hotmail.com',
    password:'Marcos1234'
  },
  {
    id:2,
    name:'Luis',
    surname:'Rodriguez',
    email:'LuisRodri@hotmail.com',
    password:'Luis1234'
  },
  {
    id:3,
    name:'Juan',
    surname:'Bolivar',
    email:'JuanBoli@hotmail.com',
    password:'juan1234'
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users:User[]=ELEMENT_DATA;
constructor(
  private matDialog: MatDialog
){}

onCreateUser():void{
 const dialogRef = this.matDialog.open(UserFormDialogComponent);
 dialogRef.afterClosed().subscribe({
  next:(v) =>{
    if(v){

      this.users=[
        ...this.users,
{ id:this.users.length + 1,
  name: v.name,
  surname:v.surname,
  email:v.email,
  password:v.password
  },
      ];
        
      console.log('Recibimos el valor:',v);
    } else {
      console.log('Se cancelo');
    }
    
  }
 })
}

onDeleteUser(userToDelete:User):void{
  console.log(userToDelete);
  if(confirm(`Esta seguro de Eliminar a ${userToDelete.name}`)){
  this.users = this.users.filter((u)=> u.id !==userToDelete.id)
  }
}


onEditUser(userToEdit: User):void{
  const dialogRef = this.matDialog.open(UserFormDialogComponent,{
    data:userToEdit
  })
 dialogRef.afterClosed().subscribe({
  next:(userUpdated) =>{
   console.log(userUpdated) 
   if (userUpdated){ 
    this.users= this.users.map((user)=>{

      return user.id === userToEdit.id
       ? {...user, ...userUpdated}
       : user
    })
   }
     }
   })
  }
}
