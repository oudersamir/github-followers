import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  followers:any=[];


  constructor(private githubService:GithubService) { 
  }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers()
  {
    this.githubService.getAll().subscribe(
      r=>this.followers=r,
      error=> console.log(error)
    );
 
  }

}
