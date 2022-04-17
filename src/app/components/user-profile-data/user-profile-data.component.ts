import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-data',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.css']
})
export class UserProfileDataComponent implements OnInit {

  @Input() githubProfile:any
  constructor() { }

  ngOnInit(): void {
  }

}
