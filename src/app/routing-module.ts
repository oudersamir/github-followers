import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
    {
      path:"followers",
      component: GithubComponent
    },
    {
        path:"followers/:id/:username",
        component: ProfileFollowerComponent
      },
    {
      path:'',
      component: HomeComponent
    }
    ,
    {
      path:"posts",
      component: PostsComponent
    }
    ,
    {
      path:"**",
      component: PageNotFoundComponent
    }


]



@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class  RoutingModule{



}