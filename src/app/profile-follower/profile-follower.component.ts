import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  id : number;
  username : string;
  page: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    //pour recuperer les segments  dynamiques 
    // this.route.paramMap.subscribe(
    //   params=>{
    //     this.id=+params.get('id');    
    //     this.username=params.get('username');    

    //   }
    // )
    this.id=+this.route.snapshot.paramMap.get('id');
    this.username=this.route.snapshot.paramMap.get('username');


    // this.route.queryParamMap.subscribe(queryParams=>
    //   console.log(queryParams.get('type'))
    //   )
    this.page=+this.route.snapshot.queryParamMap.get('page');

  }

}
