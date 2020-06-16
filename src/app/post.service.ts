import { DataService } from './data.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService  extends DataService {
  
  constructor( http:HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',http);
  }

//   getPosts(){
//     return this.http.get(this.url);
//   }

//   createPost(post){
//    return  this.http.post(this.url,post).pipe(
//     catchError(
//       error=>{
//         if(error.status===400)
//         return throwError(new BadInput);
//       return throwError(new AppError);
//       })
// );

//   }


//   updatePost(post){
//   return  this.http.put(this.url+'/'+post.id,post)
//   }


//   deletePost(idPost:number){
//     return this.http.delete(this.url+'/'+idPost)
//     .pipe(
//           catchError(this.handelError)
//       );
  
//     }

// handelError(error:Response){
//  return  error=>{
//     if(error.status===404)
//     return throwError(new NotFoundError);
//   return throwError(new AppError);
//   }
// }


}
