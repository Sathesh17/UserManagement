import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  data :any;
  //Api for calling the value from Json --Server 
  private apiUrl = 'http://localhost:3000/user';
  private apiAdminUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient, private router: Router) { }

  //get employee List
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  
   //Add new employee
  addUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  //Edit employee
  editUser(userId: string, updatedUser: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, updatedUser);
  }

  //Delete employee
  deleteUser(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }


  //Get employee by id
  getUserById(staffId:number):Observable<any>{
    return this.http.get(this.apiUrl+'/'+staffId);

  }

  //Update employee details
  updateit(task:User):Observable<User>{
    return this.http.patch<User>(this.apiUrl+'/'+task.id,task)

  }

  authenticate(userName: string, password: string): Observable<any> {
    const value = this.http.get<any>(this.apiAdminUrl).subscribe(res => {
      const user = res.find((a: any) => { return a.username === userName && a.password === password })
      this.data = user
      if (user) {
        alert("Login success!!!");
        this.router.navigate(['home']);
        this.data = user
        console.log(this.data)
      }else{
        alert("Invalid credentials!!!");
        this.router.navigate(['']);
      }
           
    });
    return this.data;
  }




  
}
