import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './Authentication/log-in/log-in.component';
import { UserListComponent } from './Modules/user-list/user-list.component';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { EditUserComponent } from './modules/edit-user/edit-user.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
{ path:'',component:LogInComponent},
{ path:'user-list',component:UserListComponent},
{ path:'add-user',component:UserDetailsComponent},
{ path:'edit-user/:userId',component:EditUserComponent},
{ path:'home',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
