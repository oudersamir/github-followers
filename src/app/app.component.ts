import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
  courses=[

  ];
  name={id:this.courses.length+1,title:""};
  post={ 
    isActive:false,
    title:"title 1",

  };
  view='Laravel';
  changeFavorite(isActivate:boolean){
    console.log(" change favorite  : ",isActivate);
  }

  load(){
    this.courses=[
      {id:1,title:'laravel'},
      {id:2,title: 'spring'},
      {id:3,title: 'jabva'},
      {id:4,title: 'python'},
      {id:5,title: 'c++'},
    ]; 
  }

  trackCourse(index:any ,course:any){
    return course? course.id:undefined;

  }


  addCourse(){
  this.courses.push(this.name);
  this.name={id:this.courses.length+1,title:""};
  }
  deleteCourse(course){
  var index=this.courses.indexOf(course);
  this.courses.splice(index,1);
  }
  editCourse(course){
       
        course.title=this.name.title;
        this.name={id:this.courses.length+1,title:""};

  }
}
