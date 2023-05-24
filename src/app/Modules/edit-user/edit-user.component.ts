import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: number;
  userForm: FormGroup;
  userModel: any;
  id: number = 0;
  name: string = '';
  email: string = '';
  active: string = '';


  constructor(private route: ActivatedRoute, public userservice: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userId = this.route.snapshot.params['userId'];

    this.userservice.getUserById(this.userId).subscribe(
      (user) => {
        this.userModel = user;
        console.log(user);
        // this.userForm.patchValue(user);

      },
      (error) => {
        console.error('Failed to fetch user:', error);
      }
    );

  }

  onSubmit(user: NgForm) {
    console.log("Updating")
    this.userservice.updateit(user.value).subscribe(
      (result) => {
        console.log(result);
        alert("Update Successfully")
        this.router.navigate(['user-list']);
      });
  }
}
