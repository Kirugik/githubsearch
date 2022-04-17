import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public githubUserQuery:string;
  public githubProfile:any;
  public githubRepos:any[];
  public errorMessage:any;

  constructor(private githubService:GithubServiceService) { }


  public searchUser() {
    
  }

  ngOnInit(): void {
  }

}
