import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InscripcionesComponent } from "./inscripciones.component";
import { InscripcionesDetailComponent } from "./pages/inscripciones-detail.component";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: InscripcionesComponent,
            },
            {
                path: 'inscripciones/:id',
                component: InscripcionesDetailComponent,
            },
        ])
    ]
})
export class InscripcionesRoutingModule { }