import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FriendsComponent } from './components/friends/friends.component';




const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  { 
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignupComponent,
    path:'login/signup'
  },
  {
    component:EditProfileComponent,
    path:'signup/edit'
  },
  {
    component:DashboardComponent,
    path:'edit/dash',
  },
  {
    component:MessagesComponent,
    path:'dash/messages'
  },
  // {
  //   component:PostsComponent,
  //   path:'dash/posts'
  // },
  // {
  //   component:CommentsComponent,
  //   path:'dash/comments'
  // },
  // {
  //   component:FriendsComponent,
  //   path:'dash/friends'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
