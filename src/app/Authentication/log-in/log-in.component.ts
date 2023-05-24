import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators,FormsModule } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
import {Admin } from 'src/app/admin';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LoginForm: FormGroup;
  isSubmitted = false;
  error: string = '';
  username : string;
  password : string;
  credentials : Admin = new Admin();
  constructor(private route: Router, private formBuilder: FormBuilder, public userservice: UserService, private http: HttpClient) { }

  ngOnInit(): void {

    //create a reactive form model
    this.LoginForm = this.formBuilder.group({
      //FormControlName feilds
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]


    });
  }
  //get all control for validation
  get formControls() {
    return this.LoginForm.controls;


  }

 successful : any;


 login(): void {
  this.credentials.username = this.username;
    this.credentials.password = this.password;

  //  if (this.loginForm.valid) {
  this.userservice.authenticate(this.credentials.username, this.credentials.password).subscribe((res: Admin) => {

    console.log(res)
    // alert("login success!!!!")
  });
  // }
}
 }
