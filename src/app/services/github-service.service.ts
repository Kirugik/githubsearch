import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }


  // display github profile
  public getProfile (searchTerm:any):Observable<any> {
    let dataURL = `https://api.github.com/users/${searchTerm}?client_id=${client_id}&client_secret=${client_secret}`;
    return this.httpClient.get<any>(dataURL).pipe(
      // retry(count:1),
    catchError(this.handleErrors)
    );
  }


  // display github repos
  public getRepos (searchTerm:any):Observable<any[]> {
    let dataURL = `https://api.github.com/users/${searchTerm}/repos?client_id=${client_id}&client_secret=${client_secret}`;
    return this.httpClient.get<any[]>(dataURL).pipe(
      // retry(count:1),
    catchError(this.handleErrors)
    );
  }
}
