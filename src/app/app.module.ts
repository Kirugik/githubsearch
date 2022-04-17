import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDataComponent } from './components/user-profile-data/user-profile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserProfileComponent,
    UserProfileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
