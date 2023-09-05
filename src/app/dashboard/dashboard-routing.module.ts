import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminGuard } from '../core/guards/admin.guard';
import { InscripcionesEffects } from './pages/inscripciones/store/inscripciones.effects';




@NgModule({
    imports:[
        RouterModule.forChild([
            
      {
        path:'home',
        loadChildren:()=> import('./pages/home/home.module').then((m)=>m.HomeModule)
      },

      {
        path:'users',
        canActivate:[adminGuard],
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
        path:'categorias',
        loadChildren:()=> import('./pages/categorias/categorias.module').then((m)=>m.CategoriasModule)
      },
      {
        path:'inscripciones',
        loadChildren:()=> import('./pages/inscripciones/inscripciones.module').then((m)=>m.InscripcionesModule)
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