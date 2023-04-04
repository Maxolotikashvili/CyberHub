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

  isUserLoggedIn!: boolean;
  userName!: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  //
  checkIfUserIsLoggedIn() {
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')!);
    this.userName = JSON.parse(localStorage.getItem('userRegistrationData')!)?.name;
  } 

  //
  signOutUser() {
    localStorage.removeItem('isLoggedIn');
    location.reload();
  }

  //
  openUserLoginComponent() {
    this.dialog.open(LoginComponent);
  }

  //
  openUserRegisterComponent() {
    this.dialog.open(RegisterComponent);
  }
}