import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignService, userType } from '../Services/sign.service';
import { matchEmailValidator } from '../Validators/Custom-email.validator';
import { matchPasswordValidator } from '../Validators/Custom-password.validator';
import { RegisterComponent } from '../register/register.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: userType;
  signedIn:boolean = false

  // Fontawesome
  xmark = faXmark;

  // Form
  userForm!: FormGroup;

  // Getter Variables
  Passwords!: any;
  Password!: any;

  constructor(
    private signservice: SignService,
    private fb: FormBuilder,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {

    // Receive Data
    this.signservice.sendData().subscribe((data) => {
      this.user = data;
    })

    // Form
    this.userForm = this.fb.group({
      email: [''],
      confirmEmail: [`${this.user?.email}`],
      passwords: this.fb.group({
        password: [''],
        confirmPassword: [`${this.user?.password}`]
      }, { validators: matchPasswordValidator })
    }, { validators: matchEmailValidator })


    this.Passwords = this.userForm.get('passwords');
    this.Password = this.Passwords.get('password')

  }

  openDialog() {
    this.dialog.open(RegisterComponent)
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  loginFunction() {
    alert('You are now logged in');
    this.dialog.closeAll();
  }

}
