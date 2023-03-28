import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MyProfileServiceService {
  private username: string;
  private client_id: string;
  private client_secret: string;

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = "Kirugik";

   }
   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.username +
     "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
     .pipe(map(res => res));
   }

   getUserRepos(){
     return this.http.get("https://api.github.com/users/" + this.username +
     "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
     .pipe(map(res => res));
   }

}