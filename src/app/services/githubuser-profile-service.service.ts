import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable()
export class GithubProfileServiceService {

  private username: string;
  private client_id = "a55e9e8d03689dad4d8a";
  private client_secret = "3ca7fcb547b2d9dd56b6a9266ec2eb73733a2674";

  constructor(private http:HttpClient) {
    // console.log("service is now ready");
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