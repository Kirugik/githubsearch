import { Component, OnInit } from '@angular/core';
import { GithubProfileServiceService } from '../../services/githubuser-profile-service.service';

@Component({
  selector: 'app-githubuser-profile',
  templateUrl: './githubuser-profile.component.html',
  styleUrls: ['./githubuser-profile.component.css']
})
export class GithubuserProfileComponent implements OnInit {
  profile: any = [];
  repos: any = [];
  username: string;

  constructor(private githubProfileService:GithubProfileServiceService) { }

   findUser(){
    this.githubProfileService.updateProfile(this.username);
     this.githubProfileService.getProfileInfo().subscribe(profile => {
       this.profile = profile;
     });

       this.githubProfileService.getRepos().subscribe(repos =>{
         this.repos = repos;
       })
   }
  ngOnInit() {
  }

}