import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GithubuserProfileComponent } from './components/githubuser-profile/githubuser-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//defining routes
const routes:Routes=[
  {path:"my-profile", component: MyProfileComponent},
  {path:"githubuser-profile", component: GithubuserProfileComponent},
  {path:"",redirectTo:"/my-profile",pathMatch:"full"},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }