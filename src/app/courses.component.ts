import { CoursesService } from './courses.service';
import { Component, Input, Output ,EventEmitter} from '@angular/core';
@Component({
    selector:'courses',
    template: `

    <h3  [style.backgroundColor]="  isActive ? 'blue': 'red'">cours</h3>
    <div  (click)="onClick($event)">
    <button   (click)="onClick($event)"   class="btn btn-primary"  [class.active]="isActive">button</button>
    <input #name type="text"   [(ngModel)]="email"  (keyup.enter)="keyUp(name)"/>
    <p>{{email   | resume}}</p>
    </div>


    <div class="fa " [class.fa-star]="isActive" [class.fa-star-o]="!isActive"  (click)="clickFavorite()"></div>

    `
})
export class CoursesComponent{
    title="Vue js";
    @Input('is-A')isActive=true;
    @Output('change') ch= new EventEmitter();
    email="ouder@gmail.com";
    courses;
    constructor(coursesService:CoursesService){
        this.courses=coursesService.getCourses();
    }

    clickFavorite(){
        this.isActive=!this.isActive;

        
        this.ch.emit(this.isActive);
        //console.log("bonjour click");
       
    }

    keyUp(name){
        console.log("angular key ",name.value);
    }
    onClick($event){
        $event.stopPropagation();
     //console.log("clicked : ",$event);
    }

    getTitle(){
        return this.title;
    }

}