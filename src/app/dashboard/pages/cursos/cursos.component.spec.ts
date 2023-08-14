// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialog } from '@angular/material/dialog';
// import { CursosComponent } from './cursos.component';
// import { CursosService } from './cursos.service';
// import { of } from 'rxjs';
// import { CursosFormDialogComponent } from './components/cursos-form-dialog/cursos-form-dialog.component';
// import { Cursos } from './model/index';

// describe('CursosComponent', () => {
//   let component: CursosComponent;
//   let fixture: ComponentFixture<CursosComponent>;
//   let mockMatDialog: jasmine.SpyObj<MatDialog>;
//   let mockCursosService: jasmine.SpyObj<CursosService>;

//   beforeEach(() => {
//     mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
//     mockCursosService = jasmine.createSpyObj('CursosService', [
//       'loadCursos',
//       'getCursos',
//       'createCursos',
//       'deleteCursosById',
//       'updateCursosById',
//     ]);

//     TestBed.configureTestingModule({
//       declarations: [CursosComponent],
//       providers: [
//         { provide: MatDialog, useValue: mockMatDialog },
//         { provide: CursosService, useValue: mockCursosService },
//       ],
//     });

//     fixture = TestBed.createComponent(CursosComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should open dialog and create cursos on onCreateCursos', () => {
//     const dialogRefSpyObj = jasmine.createSpyObj({
//       afterClosed: of({ id: 1, name: 'Curso 1' }),
//     });
//     mockMatDialog.open.and.returnValue(dialogRefSpyObj);

//     component.onCreateCursos();

//     expect(mockMatDialog.open).toHaveBeenCalledWith(CursosFormDialogComponent);
//     expect(mockCursosService.createCursos).toHaveBeenCalledWith({
//       id: 1,
//       title: 'Curso 1',
//       subtitle:'jdjd',
//       description:'djdjd',
//       image:'fgffh'
//     });
//   });

//   it('should delete cursos on onDeleteCursos', () => {
//     const cursosToDelete: Cursos = {
//         id: 1, title: 'Curso 1', subtitle: 'jdjd', description: 'djdjd',
//         image: 'fgffh'
//     };
    
//     // Mock the window.confirm method to return true
//     spyOn(window, 'confirm').and.returnValue(true);
  
//     component.onDeleteCursos(cursosToDelete);
  
//     expect(window.confirm).toHaveBeenCalled();
//     expect(mockCursosService.deleteCursosById).toHaveBeenCalledWith(1);
//   });

//   it('should open dialog and update cursos on onEditCursos', () => {
//     const cursosToEdit = { id: 1, title: 'Curso 1',subtitle:'jdjd',description:'djdjd',image:'fgffh' };
//     const dialogRefSpyObj = jasmine.createSpyObj({
//       afterClosed: of({ title: 'Curso 1 Modificado' }),
//     });
//     mockMatDialog.open.and.returnValue(dialogRefSpyObj);

//     component.onEditCursos(cursosToEdit);

//     expect(mockMatDialog.open).toHaveBeenCalledWith(CursosFormDialogComponent, {
//       data: cursosToEdit,
//     });
//     expect(mockCursosService.updateCursosById).toHaveBeenCalledWith(
//       1,
//       cursosToEdit
//     );
//   });



// });
