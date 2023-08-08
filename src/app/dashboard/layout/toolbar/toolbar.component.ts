import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../../pages/users/model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
 
  @Input()
  public drawer?: MatDrawer;

public authUser$: Observable <User | null>;

  constructor (private authService: AuthService ){
    this.authUser$ = this.authService.authUser$;
  }
}
