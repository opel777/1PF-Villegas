import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlumnosComponent } from "./alumnos.component";
import { AlumnosDetailComponent } from "./pages/alumnos-detail/alumnos-detail.component";


@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'',
                component:AlumnosComponent,
              },
            {
                path:'alumnos/:id',
                component:AlumnosDetailComponent,
              },
        ])
    ]
})
export class AlumnosRoutingModule{}