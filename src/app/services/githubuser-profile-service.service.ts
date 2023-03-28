import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { environment } from '../../environments/environment';

@Injectable()
export class GithubProfileServiceService {

  private username: string;
  private client_id: string;
  private client_secret: string;

  constructor(private http:HttpClient) {
    this.username = "Kirugik";
  }

  
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username
     + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
     .pipe(map(res => res));
  }

  
  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.username
     + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
     .pipe(map(res => res));
  }

  updateProfile(username:string){
    this.username = username;
  }
}