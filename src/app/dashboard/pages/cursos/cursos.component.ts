import { Component } from '@angular/core';
import { Cursos } from './model';
import { MatDialog } from '@angular/material/dialog';
import { CursosFormDialogComponent } from './components/cursos-form-dialog/cursos-form-dialog.component';

const ELEMENT_DATA: Cursos[] = [
  {
    id:1,
    logo:'logo.png',
    name:'Bases de Datos',
    description:'lorem ipsum ',
    
  },
  {
    id:2,
    logo:'logo.png',
    name:'Bases de Datos',
    description:'lorem ipsum ',
    
  },
  {
    id:3,
    logo:'logo.png',
    name:'Bases de Datos',
    description:'lorem ipsum ',
    
  }
  
];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent {
  public users:Cursos[]=ELEMENT_DATA;
  constructor(
    private matDialog: MatDialog
  ){}
  
  
  //funcion para crear usuario//
  onCreateCursos():void{
   const dialogRef = this.matDialog.open(CursosFormDialogComponent);
   dialogRef.afterClosed().subscribe({
    next:(newStudent) =>{
      if(newStudent){
  
        this.users=[
          ...this.users,
  { id:this.users.length + 1,
    logo:newStudent.logo,
    name: newStudent.name,
    description:newStudent.description,
    
    },
        ];  
      }  
    }
   })
  }
  
  //funcion para eliminar usuario//
  onDeleteCursos(userToDelete:Cursos):void{
    if(confirm(`Esta seguro de Eliminar a ${userToDelete.name}`)){
    this.users = this.users.filter((u)=> u.id !==userToDelete.id)
    }
  }
  
  //funcion para editar usuario//
  onEditCursos(userToEdit: Cursos):void{
    const dialogRef = this.matDialog.open(CursosFormDialogComponent,{
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
