import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
