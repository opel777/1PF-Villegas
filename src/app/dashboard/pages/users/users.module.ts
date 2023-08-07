import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    RouterModule,
    MatIconModule,
    UserRoutingModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
