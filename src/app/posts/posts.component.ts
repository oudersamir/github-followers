import { BadInput } from './../commun/bad-input';
import { NotFoundError } from './../commun/not.found.error';
import { AppError } from './../commun/app.error';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts:any=[];
 state:boolean=true;
 post={
   id:0,
   title:'',
   body:'',
   userId:''
 }
  constructor(private postService:PostService) {

   }

   
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.postService.getAll()
    .subscribe(
      response=>{
       this.posts=response;
      },
      
      (error:AppError)=>{
        console.log(error);
         
        
        if(error  instanceof NotFoundError)
        alert(" expected error ");
        else 
        alert("unexpected error ");
      }
    );
  }

   createPost(){
     this.postService.create(this.post)
     .subscribe(
      response=>{
        this.post.id=(response as any).id;
        this.posts.unshift(this.post);
         
       console.log(response);
       this.post={
        id:0,
        title:'',
        body:'',
        userId:''
      }
      },
      (error:AppError)=>{
        console.log(error);
         
        
        if(error  instanceof BadInput)
        alert(" bad input ");
        else 
        alert("unexpected error ");
      }
    );

   }

   editPost(post){
   this.post=post;
   this.state=!this.state;
   }
   updatePost(){
     this.postService.update(this.post)
     .subscribe(response=>{
      this.state=!this.state;
      this.post={
       id:0,
       title:'',
       body:'',
       userId:''
     }
     },
     error=>{
       alert("unexpected error ");
     }
     
     );

   }

   deletePost(post:any){

  this.postService.delete(post.id)
    .subscribe(response=>{
      console.log(response);
     // console.log(post);

      var index=this.posts.indexOf(post);
      this.posts.splice(index,1);
     this.post={
      id:0,
      title:'',
      body:'',
      userId:''
    }

    }
    ,
      (error:AppError)=>{
        console.log(error);      
        if(error  instanceof NotFoundError)
        alert(" ce poste est deja supprime ");
        else 
        alert("unexpected error ");
      }
    );

   }



}
