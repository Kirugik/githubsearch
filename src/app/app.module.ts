import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GithubuserProfileComponent } from './components/githubuser-profile/githubuser-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyProfileServiceService } from "./services/my-profile-service.service";
import { GithubProfileServiceService } from './services/githubuser-profile-service.service';
import { ToUppercasePipe } from './to-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    GithubuserProfileComponent,
    NotFoundComponent,
    ToUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyProfileServiceService, GithubProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }