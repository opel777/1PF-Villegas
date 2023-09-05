import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoriasComponent } from "./categorias.component";
import { CategoriasDetailComponent } from "./pages/categorias-detail.component";



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CategoriasComponent,
            },
            {
                path: 'categorias/:id',
                component: CategoriasDetailComponent,
            },
        ])
    ]
})
export class CategoriasRoutingModule { }