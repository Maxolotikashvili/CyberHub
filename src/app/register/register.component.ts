import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SignService, userType } from '../Services/sign.service';
import { matchValidator } from '../Validators/Custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Form Variable
  userForm!: FormGroup;

  // Getter Variable
  Firstname!: any;
  Lastname!: any;
  Email!: any;
  Date!: any;
  Password!: any;
  Confirmpassword!: any;

  // Date
  minDate = new Date(1900, 1, 1);
  maxDate = new Date();

  // Fontawesome
  xmark = faXmark;

  // User Object
  userData!: userType;

  // Spinner
  spinnerboxshow = "";
  blur = "";

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private signservice: SignService
  ) { }

  ngOnInit(): void {

    // Form
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, {validators: matchValidator })

    // Getters
    this.Firstname = this.userForm.get('firstName');
    this.Lastname = this.userForm.get('lastName');
    this.Email = this.userForm.get('email');
    this.Date = this.userForm.get('date');
    this.Password = this.userForm.get('password');
    this.Confirmpassword = this.userForm.get('confirmPassword');

  }

  dialogClose() {
    this.dialog.closeAll();
  }

  sendData() {
    this.userData = {
      email: this.Email.value,
      password: this.Password.value
    };

    this.signservice.getData(this.userData);
    alert('Account Has Been Created');
    this.dialog.closeAll()
  }

}
