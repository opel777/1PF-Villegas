import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { RouterModule } from '@angular/router';
import { MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ClasesModule } from './pages/clases/clases.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';







@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    HomeModule,
    UsersModule,
    MatDialogModule,
    ClasesModule,
    CursosModule,
    AlumnosModule,
    CategoriasModule,
    InscripcionesModule,
    DashboardRoutingModule
    
   
    
    
  ],
  exports:[
    DashboardComponent,
  ]
})
export class DashboardModule { 
  
}
