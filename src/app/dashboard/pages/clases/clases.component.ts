import { Component } from '@angular/core';
import { ClasesFormDialogComponent } from './components/clases-form-dialog/clases-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Materia } from './model';
const ELEMENT_DATA: Materia[] = [
  {
    id:1,
    name:'Bases de Datos',
    nameteacher:'Prof. Jose Perez',
    
  },
  {
    id:2,
    name:'Sql',
    nameteacher:'Prof. Juan Rodriguez',
    
  },
  {
    id:3,
    name:'Ruby',
    nameteacher:'Prof. Alejandro Bolivar',
  
  }
];
@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {
  public users:Materia[]=ELEMENT_DATA;
  constructor(
    private matDialog: MatDialog
  ){}
  
  
  //funcion para crear usuario//
  onCreateMateria():void{
   const dialogRef = this.matDialog.open(ClasesFormDialogComponent);
   dialogRef.afterClosed().subscribe({
    next:(newStudent) =>{
      if(newStudent){
  
        this.users=[
          ...this.users,
  { id:this.users.length + 1,
    name: newStudent.name,
    nameteacher:newStudent.nameteacher,
    
    },
        ];  
      }  
    }
   })
  }
  
  //funcion para eliminar usuario//
  onDeleteMateria(userToDelete:Materia):void{
    if(confirm(`Esta seguro de Eliminar a ${userToDelete.name}`)){
    this.users = this.users.filter((u)=> u.id !==userToDelete.id)
    }
  }
  
  //funcion para editar usuario//
  onEditMateria(userToEdit: Materia):void{
    const dialogRef = this.matDialog.open(ClasesFormDialogComponent,{
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
