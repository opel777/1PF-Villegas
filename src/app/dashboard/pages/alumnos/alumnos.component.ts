import { Component, OnDestroy } from '@angular/core';
import { Alumno } from './model';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosService } from './alumnos.service';
import { AlumnoFormDialogComponent } from './components/alumno-form-dialog/alumno-form-dialog.component';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from '../../../store/auth/auth.selectors';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnDestroy {
  public alumnos: Observable<Alumno[]>;
  public isLoading$: Observable<boolean>;
  public destroyed = new Subject<boolean>();
  public isAdmin$:Observable<boolean>

  public loading = false;
  constructor(
    private matDialog: MatDialog,
     private alumnoService: AlumnosService,
     private store:Store) {
    this.alumnoService.loadAlumno();
    this.isLoading$ = this.alumnoService.isLoading$;
    this.alumnos = this.alumnoService.getAlumno();
    this.isAdmin$ = this.store.select(selectIsAdmin)
  }
  ngOnDestroy(): void {
    
  }
  

  onCreateAlumno():void{
    this.matDialog
    // ABRO EL MODAL
    .open(AlumnoFormDialogComponent)
    // Y DESPUES DE QUE CIERRE
    .afterClosed()
    // HAGO ESTO...
    .subscribe({
      next: (v) => {
        if (v) {
          this.alumnoService.createAlumno({
            id:v.id,
            name:v.name,
            surname:v.surname,
            email:v.email,
            password:v.paswword,
       
          });
        }
      },
    });
  }
  
  //funcion para eliminar //
  onDeleteAlumno(alumnoToDelete: Alumno): void{
    if (confirm(`¿Está seguro de eliminar a ${alumnoToDelete.name}?`)) {
      this.alumnoService.deleteAlumnoById(alumnoToDelete.id);
    }
  }
  
  //funcion para editar //
  onEditAlumno(alumnoToEdit: Alumno):void{
    this.matDialog
    // ABRO EL MODAL
    .open(AlumnoFormDialogComponent, {
      // LE ENVIO AL MODAL, EL USUARIO QUE QUIERO EDITAR
      data: alumnoToEdit,
    })
    // Y DESPUES DE QUE CIERRE
    .afterClosed()
    // HAGO ESTO...
    .subscribe({
      next: (alumnoUpdated) => {
        if (alumnoUpdated) {
          this.alumnoService.updateAlumnoById(alumnoToEdit.id, alumnoUpdated);
        }
      },
    });
}
}

