import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordControl = new FormControl('', [Validators.required]);

  public loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  

  
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}
  logout(): void{
    this.router.navigate(['/dashboard','home'],{
      // relativeTo: this.activatedRoute,
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      // FORMULARIO VALIDO
      this.authService.login(this.loginForm.getRawValue());
    }
  }
}
