import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Modules/user/user.component';
// import { UserDetailsComponent } from './Modules/user-details/user-details.component';
import { UserListComponent } from './Modules/user-list/user-list.component';
import { LogInComponent } from './Authentication/log-in/log-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './modules/header/header.component';
import { SideNavBarComponent } from './Modules/side-nav-bar/side-nav-bar.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './modules/edit-user/edit-user.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // UserDetailsComponent,
    UserListComponent,
    LogInComponent,
    HeaderComponent,
    SideNavBarComponent,
    EditUserComponent,
    UserDetailsComponent,
    HomePageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule, //for page
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
