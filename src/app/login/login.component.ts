import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { matchEmailValidator } from '../Validators/Custom-email.validator';
import { matchPasswordValidator } from '../Validators/Custom-password.validator';
import { RegisterComponent } from '../register/register.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserSignInType } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: UserSignInType;
  userForm!: FormGroup;
  signedIn!: boolean;
  
  // Getters
  Passwords!: AbstractControl | null;
  Password!: AbstractControl | null | undefined;

  fontawesome = {
    xmark: faXmark    
  }
  
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.receiveRegistrationData();
    this.activateFormValidation();
  }
 
  //
  receiveRegistrationData() {
    this.user = JSON.parse(localStorage.getItem('userRegistrationData')!);
  }

  //
  activateFormValidation() {
    this.userForm = this.fb.group({
      email: [''],
      confirmEmail: [`${this.user?.email}`],
      passwords: this.fb.group({
        password: [''],
        confirmPassword: [`${this.user?.password}`]
      }, { validators: matchPasswordValidator })
    }, { validators: matchEmailValidator })


    this.Passwords = this.userForm.get('passwords');
    this.Password = this.Passwords?.get('password')
  }

  //
  openDialog() {
    this.dialog.open(RegisterComponent)
  }

  //
  closeDialog() {
    this.dialog.closeAll()
  }

  //
  logInUser() {
    let isLoggedIn: boolean = true;

    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    this.dialog.closeAll();
    location.reload();
  }
}
