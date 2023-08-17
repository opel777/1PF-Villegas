import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  // {

  //   path:'',
  //   redirectTo:'auth',
  //   pathMatch: 'full'

  // },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((tipescripModule)=>tipescripModule.DashboardModule)
  },

  {
    path:'auth',
    component:AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((tipescripModule)=>tipescripModule.AuthModule)
  },

  {
    path:'**',
    redirectTo:'auth/login',
  },

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
