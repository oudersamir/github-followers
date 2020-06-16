import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RoutingModule}  from './routing-module'
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import  {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { ResumePipePipe } from './resume-pipe.pipe';
import { ResumePipe } from './resume.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostsComponent } from './posts/posts.component'; 
import { PostService } from './post.service';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';


// const routes:Routes=[
//     {
//       path:"followers",
//       component: GithubComponent
//     },
//     {
//       path:'',
//       component: HomeComponent
//     }
//     ,
//     {
//       path:"posts",
//       component: PostsComponent
//     }
//     ,
//     {
//       path:"**",
//       component: PageNotFoundComponent
//     }


// ]



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipePipe,
    ResumePipe,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignUpComponent,
    PostsComponent,
    GithubComponent,
    NavbarComponent,
    ProfileFollowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
    ],
  providers: [CoursesService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
