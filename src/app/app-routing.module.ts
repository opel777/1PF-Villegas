import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  {

    path:'',
    redirectTo:'auth',
    pathMatch: 'full'

  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },

  {
    path:'auth',
    component:AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule)
  },

  {
    path:'**',
    redirectTo:'404-notFound',
  },

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
