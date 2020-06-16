import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService  extends DataService{

  constructor(http:HttpClient) 
  { 
    super('https://api.github.com/users/amazon/followers',http);
  }
}
