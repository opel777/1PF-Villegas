import { Component, OnDestroy } from '@angular/core';
import { ClasesFormDialogComponent } from './components/clases-form-dialog/clases-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { ClasesService } from './clases.service';
import { Materia } from './model';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnDestroy {
  public clases: Observable<Materia[]>;
  public isLoading$: Observable<boolean>;
  public destroyed = new Subject<boolean>();
  public isAdmin$:Observable<boolean>;
  public loading = false;
  constructor(
     private matDialog: MatDialog,
     private clasesService: ClasesService,
     private store:Store) {
    this.clasesService.loadClase();
    this.isLoading$ = this.clasesService.isLoading$;
    this.clases = this.clasesService.getClase();
    this.isAdmin$=this.store.select(selectIsAdmin)
  }
  ngOnDestroy(): void {
    
  }
  

  onCreateClase():void{
    this.matDialog
    // ABRO EL MODAL
    .open(ClasesFormDialogComponent)
    // Y DESPUES DE QUE CIERRE
    .afterClosed()
    // HAGO ESTO...
    .subscribe({
      next: (v) => {
        if (v) {
          this.clasesService.createClase({
            id:v.id,
            title:v.name,
            nameteacher:v.nameteacher,
            inscripcionId:v.inscripcionId
       
          });
        }
      },
    });
  }
  
  //funcion para eliminar //
  onDeleteClase(claseToDelete: Materia): void{
    if (confirm(`¿Está seguro de eliminar a ${claseToDelete.title}?`)) {
      this.clasesService.deleteClaseById(claseToDelete.id);
    }
  }
  
  //funcion para editar //
  onEditClase(claseToEdit: Materia):void{
    this.matDialog
    // ABRO EL MODAL
    .open(ClasesFormDialogComponent, {
      // LE ENVIO AL MODAL, EL USUARIO QUE QUIERO EDITAR
      data: claseToEdit,
    })
    // Y DESPUES DE QUE CIERRE
    .afterClosed()
    // HAGO ESTO...
    .subscribe({
      next: (clasesUpdated) => {
        if (clasesUpdated) {
          this.clasesService.updateClaseById(claseToEdit.id, clasesUpdated);
        }
      },
    });
}
}
