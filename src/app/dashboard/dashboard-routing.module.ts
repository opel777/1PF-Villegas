import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosDetailComponent } from './pages/cursos/pages/cursos-detail/cursos-detail.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClasesDetailComponent } from './pages/clases/pages/clases-detail/clases-detail.component';



@NgModule({
    imports:[
        RouterModule.forChild([
            
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'users',
        loadChildren:()=> import('./pages/users/users.module').then((m)=>m.UsersModule)
        
      },
      
      {
        path:'cursos',
        loadChildren:()=> import('./pages/cursos/cursos.module').then((m)=>m.CursosModule)
      },
      
      {
        path:'clases',
        loadChildren:()=> import('./pages/clases/clases.module').then((m)=>m.ClasesModule)
      },
      
      {
        path:'**',
        redirectTo:'home',
      },
    ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule{}