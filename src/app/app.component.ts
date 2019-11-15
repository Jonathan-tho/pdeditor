import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">{{ title }}</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <button class="btn btn-success" *ngIf="!authService.isLoggedIn" (click)="authService.login()">Log In</button>
          </li>
          <li>
            <button class="btn btn-success" (click)="authService.logout()" *ngIf="authService.isLoggedIn">Log Out</button>
          </li>
        </ul>
      </nav>
      <div class="col-sm-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `.navbar-right { margin-right: 0px !important}
    button {margin: 10px}`
  ]
})
export class AppComponent {
  title = 'Provider Data Editor';

  constructor(public authService: AuthService) {}
}
