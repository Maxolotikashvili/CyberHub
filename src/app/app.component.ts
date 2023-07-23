import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';
  user_token: string = localStorage.getItem('user-token')!;
  username!: string;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserInfoFromToken();
  }

  //
  openUserLoginComponent() {
    this.dialog.open(LoginComponent);
  }

  //
  openUserRegisterComponent() {
    this.dialog.open(RegisterComponent);
  }

  //
  getUserInfoFromToken() {
    if (this.user_token) {
      const tokenPayload: string = this.user_token.split('.')[1];
      const decodedPayload = atob(tokenPayload);
      const userInfo = JSON.parse(decodedPayload);
      this.username = userInfo.username;
    }
  }

  //
  logOutUser() {
    localStorage.removeItem('user-token');
    location.reload();
  }
}