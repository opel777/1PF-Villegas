import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



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