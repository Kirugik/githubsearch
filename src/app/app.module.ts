import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDataComponent } from './components/user-profile-data/user-profile-data.component';
import { UserProfileDetailsComponent } from './components/user-profile-details/user-profile-details.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserProfileComponent,
    UserProfileDataComponent,
    UserProfileDetailsComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
