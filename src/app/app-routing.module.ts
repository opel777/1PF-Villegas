import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { ClasesComponent } from './dashboard/pages/clases/clases.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CursosDetailComponent } from './dashboard/pages/cursos/pages/cursos-detail/cursos-detail.component';
import { ClasesDetailComponent } from './dashboard/pages/clases/pages/clases-detail/clases-detail.component';

const routes: Routes = [

  {
    path:'dashboard',
    component:DashboardComponent,

    children:[
      
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'users',
        component:UsersComponent,
      },
      {
        path:'users/:id',
        component:UserDetailComponent,
      },
     
      {
        path:'cursos',
        component:CursosComponent,
      },
      {
        path:'cursos/:id',
        component:CursosDetailComponent,
      },
      {
        path:'clases',
        component:ClasesComponent,
      },
      {
        path:'clases/:id',
        component:ClasesDetailComponent,
      },
      {
        path:'**',
        redirectTo:'home',
      },
     
     
    ]
  },
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {
        path:'login',
      component:LoginComponent
    },
    {
      path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
  redirectTo:'login'
}
      
    ]
  },
  {
    path:'**',
    redirectTo:'auth',
  },

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
