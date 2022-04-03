import { Component, OnInit } from '@angular/core';
import { SignService, userType } from '../Services/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: userType;

  constructor(
    private signservice: SignService

  ) { }

  ngOnInit(): void {
    this.signservice.sendData().subscribe((data) => {
      this.user = data;
    })
  }

}
