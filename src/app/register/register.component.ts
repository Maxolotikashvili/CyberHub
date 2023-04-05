import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { matchValidator } from '../Validators/Custom.validator';
import { UserSignInType } from '../model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  Firstname!: AbstractControl | null;
  Lastname!: AbstractControl | null;
  Email!: AbstractControl | null;
  Date!: AbstractControl | null;
  Password!: AbstractControl | null;
  Confirmpassword!: AbstractControl | null;

  // Date
  minDate = new Date(1900, 1, 1);
  maxDate = new Date();

  fontawesome = {
    xmark: faXmark
  }

  userData!: UserSignInType;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
   this.activateFormVaildators();
  }

  //
  activateFormVaildators() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required, Validators.pattern('[0-90-9, /]*'), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, { validators: matchValidator })

    // Getters
    this.Firstname = this.userForm.get('firstName');
    this.Lastname = this.userForm.get('lastName');
    this.Email = this.userForm.get('email');
    this.Date = this.userForm.get('date');
    this.Password = this.userForm.get('password');
    this.Confirmpassword = this.userForm.get('confirmPassword');
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  //
  addSlashesToDateInput(date: HTMLInputElement) {
    if (date.value.length === 2 || date.value.length === 5) {
      date.value = date.value + '/'
    };
  }

  // Save User Data
  sendUserDataToLoginComponent() {
    this.userData = {
      name: this.Firstname?.value,
      email: this.Email?.value,
      password: this.Password?.value
    };

    alert('Account Has Been Created');
    localStorage.setItem('userRegistrationData', JSON.stringify(this.userData));
    this.dialog.closeAll()
  }

}
