import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  @Input() githubRepos:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
