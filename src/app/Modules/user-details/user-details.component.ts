import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  newUser: any = {};
  user: any;
  userForm: FormGroup;

  constructor(public userservice: UserService,private formBuilder: FormBuilder,private router :Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [false]
    });
  }
  
  addUser() {
    this.userservice.addUser(this.newUser).subscribe(() => {
      this.user.push(this.newUser);
      this.newUser = {};
    });
 
    console.log("method  summit");
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      if (user.id) {
        // Add new user
        this.userservice.addUser(user).subscribe(() => {
          // Handle success or any additional logic
        });
        // console.log("inside the summit");
        this.router.navigate(['user-list']);
      } else {
        // Edit existing user
        this.userservice.editUser(user.id, user).subscribe(() => {
          // Handle success or any additional logic
        });
      }
      this.userForm.reset();
    }
  }
}
