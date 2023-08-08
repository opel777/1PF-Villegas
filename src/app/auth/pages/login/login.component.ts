import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailControl = new FormControl('villegasgustavoopel@hotmail.com', [Validators.required, Validators.email]);
  public passwordControl = new FormControl('123456', [Validators.required]);

  public loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  authService: any;

  
  constructor(private router: Router, private activatedRoute:ActivatedRoute){}
  logout(): void{
    this.router.navigate(['dashboard','home'],{
      // relativeTo: this.activatedRoute,
    })
  }
  // constructor(private authService: AuthService) {}

  login(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      // FORMULARIO VALIDO
      this.authService.login(this.loginForm.getRawValue())
    }

  //   // TODO
  //   /// authService.login({ .... }).subscribe({
  //   //
  //   // })
  // }
}
}