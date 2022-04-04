import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  minDate = new Date(1900, 1, 1)
  maxDate = new Date()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Form
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, {valdiators: matchValidator})

    // Getters
    this.Firstname = this.userForm.get('firstName');
    this.Lastname = this.userForm.get('lastName');
    this.Email = this.userForm.get('email');
    this.Date = this.userForm.get('date');
    this.Password = this.userForm.get('password');
    this.Confirmpassword = this.userForm.get('confirmPassword');
  }

}
