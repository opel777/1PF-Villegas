import { Component, Input } from '@angular/core';
import { User } from '../../model';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email'];
  @Input()
  dataSource: User[]= [];
}
