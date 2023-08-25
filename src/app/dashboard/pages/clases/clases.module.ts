import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClasesFormDialogComponent } from './components/clases-form-dialog/clases-form-dialog.component';
import { ClasesTableComponent } from './components/clases-table/clases-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClasesDetailComponent } from './pages/clases-detail/clases-detail.component';
import { ClasesRoutingModule } from './clases-routing.module';




@NgModule({
  declarations: [
    ClasesComponent,
    ClasesFormDialogComponent,
    ClasesTableComponent,
    ClasesDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ClasesRoutingModule
     
  ]
})
export class ClasesModule { }
