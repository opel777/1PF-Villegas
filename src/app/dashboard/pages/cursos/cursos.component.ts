import { Component, OnDestroy } from '@angular/core';
import { Cursos } from './model';
import { MatDialog } from '@angular/material/dialog';
import { CursosFormDialogComponent } from './components/cursos-form-dialog/cursos-form-dialog.component';
import { CursosService } from './cursos.service';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnDestroy{
  public cursos: Observable<Cursos[]>;
  public isLoading$: Observable<boolean>;
  public destroyed = new Subject<boolean>();
  public isAdmin$ : Observable<boolean>

  public loading = false;
  constructor(
    private matDialog: MatDialog, 
    private cursosService: CursosService,
    private store:Store) {
    this.cursosService.loadCursos();
    this.isLoading$ = this.cursosService.isLoading$;
    this.cursos = this.cursosService.getCursos();
    this.isAdmin$ = this.store.select(selectIsAdmin)
  }
  ngOnDestroy(): void {
    
  }
  
  
  onCreateCursos(): void {
    this.matDialog
      // ABRO EL MODAL
      .open(CursosFormDialogComponent)
      // Y DESPUES DE QUE CIERRE
      .afterClosed()
      // HAGO ESTO...
      .subscribe({
        next: (v) => {
          if (v) {
            this.cursosService.createCursos({
              id:v.id,
              image:v.image,
              title:v.title,
              subtitle:v.subtitle,
              description:v.description,
              inscripcionId:v.inscripcionId
            });
          }
        },
      });
  }

  onDeleteCursos(cursosToDelete: Cursos): void {
    if (confirm(`¿Está seguro de eliminar a ${cursosToDelete.title}?`)) {
      this.cursosService.deleteCursosById(cursosToDelete.id);
    }
  }

  onEditCursos(cursosToEdit: Cursos): void {
    this.matDialog
      // ABRO EL MODAL
      .open(CursosFormDialogComponent, {
        // LE ENVIO AL MODAL, EL USUARIO QUE QUIERO EDITAR
        data: cursosToEdit,
      })
      // Y DESPUES DE QUE CIERRE
      .afterClosed()
      // HAGO ESTO...
      .subscribe({
        next: (cursosUpdated) => {
          if (cursosUpdated) {
            this.cursosService.updateCursosById(cursosToEdit.id, cursosUpdated);
          }
        },
      });
  }
}
