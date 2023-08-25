import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';




@NgModule({
    imports:[
        RouterModule.forChild([
            
      {
        path:'home',
        loadChildren:()=> import('./pages/home/home.module').then((m)=>m.HomeModule)
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
        path:'alumnos',
        loadChildren:()=> import('./pages/alumnos/alumnos.module').then((m)=>m.AlumnosModule)
      },
      
      {
        path:'**',
        redirectTo:'home',
      }
    ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule{}