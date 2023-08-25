import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClasesComponent } from "./clases.component";
import { ClasesDetailComponent } from "./pages/clases-detail/clases-detail.component";

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'',
                component:ClasesComponent,
              },
            {
                path:'clases/:id',
                component:ClasesDetailComponent,
              },
        ])
    ]
})
export class ClasesRoutingModule{}