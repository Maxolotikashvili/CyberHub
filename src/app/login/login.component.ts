import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserSignInType } from '../model';
import { UserService } from '../Services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: UserSignInType;
  userForm!: FormGroup;
  signedIn!: boolean;

  fontawesome = {
    xmark: faXmark
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activateFormValidation();
  }

  //
  activateFormValidation() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
  checkForUserCredentials() {
    const userCredits = {
      username: this.userForm.get('username')?.value,
      email: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value
    }

    this.userService.loginUser(userCredits).subscribe({
      next: (response: { message: string, token: string }) => {
        if (response.token) {
          localStorage.setItem('user-token', response.token);
          location.reload();
        }
        
        this.snackBar.open(response.message, 'Dismiss', { duration: 3000 });
        this.dialog.closeAll();
      },

      error: (error: HttpErrorResponse) => {
        this.snackBar.open(error.error, 'Dismiss', { duration: 5000 });
      }
    });
  }
}
