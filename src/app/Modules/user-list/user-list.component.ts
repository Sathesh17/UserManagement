import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from 'src/app/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page:number=1;
  filter :string;
userID : number;
  constructor(public userservice: UserService,private router :Router) { }
  
  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data: any[]) => {
      this.users = data;
      console.log(data);
    });
    
  }

  
  userdetails(){
    this.router.navigate(['add-user'])
  }

  
  updateUser(userID:number){
    console.log(userID);
    this.router.navigate(['edit-user',userID])
  }


  deleteUser(id: number) {
    this.userservice.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  getUserById(id: number) {
    this.userservice.getUserById(id).subscribe(user => {
      console.log(user);
    });
  }
  

}
