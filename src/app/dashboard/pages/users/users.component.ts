import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
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


//funcion para crear usuario//
onCreateUser():void{
 const dialogRef = this.matDialog.open(UserFormDialogComponent);
 dialogRef.afterClosed().subscribe({
  next:(newStudent) =>{
    if(newStudent){

      this.users=[
        ...this.users,
{ id:this.users.length + 1,
  name: newStudent.name,
  surname:newStudent.surname,
  email:newStudent.email,
  password:newStudent.password
  },
      ];  
    }  
  }
 })
}

//funcion para eliminar usuario//
onDeleteUser(userToDelete:User):void{
  if(confirm(`Esta seguro de Eliminar a ${userToDelete.name}`)){
  this.users = this.users.filter((u)=> u.id !==userToDelete.id)
  }
}

//funcion para eliminar usuario//
onEditUser(userToEdit: User):void{
  const dialogRef = this.matDialog.open(UserFormDialogComponent,{
    data:userToEdit
  })


 dialogRef.afterClosed().subscribe({
  next:(userUpdated) =>{
   
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
