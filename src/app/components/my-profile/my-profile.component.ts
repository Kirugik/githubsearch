import { Component, OnInit } from '@angular/core';
import { MyProfileServiceService } from "../../services/my-profile-service.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  info: any = [];
  repos: any = [];

  constructor(private myProfileService: MyProfileServiceService) {
    // retrieving user information
    this.myProfileService.getUserInfo().subscribe(info => {
      this.info = info;
    });

    // retrieving user information
    // this.myProfileService.getUserInfo()
    // .subscribe((info: any) => {
    // this.info.next(info.data)
    // });

    // retrieving user repositories
    this.myProfileService.getUserRepos().subscribe(repos => {
      this.repos=repos;
    });

    // this.myProfileService.getUserRepos()
    // .subscribe((repos: any) => {
    // this.repos.next(repos.data);
    // });
  }
  ngOnInit() {
  }

}