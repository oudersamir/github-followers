import { BadInput } from './commun/bad-input';
import { NotFoundError } from './commun/not.found.error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { AppError } from './commun/app.error';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor(@Inject(String)private url:string,private http:HttpClient) { 
  }

  getAll(){
    return this.http.get(this.url).pipe(map(response=>response));
  }

  create(resource){
   return  this.http.post(this.url,resource).pipe(
    catchError(
      error=>{
        if(error.status===400)
        return throwError(new BadInput);
      return throwError(new AppError);
      })
);

  }


  update(resource){
  return  this.http.put(this.url+'/'+resource.id,resource)
  }


  delete(idResource:number){
    return this.http.delete(this.url+'/'+idResource)
    .pipe(
          catchError(this.handelError)
      );
  
    }

handelError(error:Response){
 return  error=>{
    if(error.status===404)
    return throwError(new NotFoundError);
  return throwError(new AppError);
  }
}


}
