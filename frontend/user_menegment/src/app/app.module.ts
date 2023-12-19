import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { NevComponent } from './nev/nev.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserFilesComponent } from './user-files/user-files.component';
import { UserNevComponent } from './user-nev/user-nev.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMissionComponent } from './admin-mission/admin-mission.component';
import { AdminBlanceComponent } from './admin-blance/admin-blance.component';
import { AdminNevComponent } from './admin-nev/admin-nev.component';
import { UserDetailsComponent } from './user-details/user-details.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NevComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    UserFilesComponent,
    UserNevComponent,
    AdminHomeComponent,
    AdminMissionComponent,
    AdminBlanceComponent,
    AdminNevComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
