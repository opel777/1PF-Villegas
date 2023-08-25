import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormDialogComponent } from './alumno-form-dialog.component';

describe('AlumnoFormDialogComponent', () => {
  let component: AlumnoFormDialogComponent;
  let fixture: ComponentFixture<AlumnoFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
