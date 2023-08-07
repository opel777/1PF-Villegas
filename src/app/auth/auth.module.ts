import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  

  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule
   
  ]
})
export class AuthModule { }
