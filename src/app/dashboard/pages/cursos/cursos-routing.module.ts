import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursosDetailComponent } from "./pages/cursos-detail/cursos-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CursosComponent,
            },
            {
                path: 'cursos/:id',
                component: CursosDetailComponent,
            },
        ])
    ]
})
export class CursosRoutingModule { }