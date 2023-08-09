import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [AuthService], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Check the component instance, not the class itself
  });

  it('should have invalid form initially', () => {
    expect(component.loginForm.valid).toBeFalse(); // Check the validity of the loginForm
  });

  it('should validate required email field', () => {
    const emailControl = component.loginForm.get('email');
    expect(emailControl?.hasError('required')).toBeTrue();

    emailControl?.setValue('vi@hotmail.com');
    expect(emailControl?.hasError('required')).toBeFalse();
  });

  it('should validate email format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalidemail');
    expect(emailControl?.hasError('email')).toBeTrue();

    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBeFalse();
  });

  it('should validate required password field', () => {
    const passwordControl = component.loginForm.get('password');
    expect(passwordControl?.hasError('required')).toBeTrue();

    passwordControl?.setValue('123456');
    expect(passwordControl?.hasError('required')).toBeFalse();
  });

  it('should call AuthService.login when form is valid', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'login');

    // Act: Set the form values
    component.loginForm.setValue({
      email: 'vi@hotmail.com',
      password: '123456',
    });

    // Act: Call the login method
    component.login();

    // Assert: Check if the login method was called
    expect(authService.login).toHaveBeenCalled();
  });
});

