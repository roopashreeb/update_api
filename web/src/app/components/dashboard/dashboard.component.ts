import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showMessages: boolean = false;
  showPosts: boolean = false;
  showComments: boolean = false;
  showFriends: boolean = false;
 
constructor(private router:Router, private authService: AuthService){}

displayMessages() {
  this.showMessages = true;
   this.showPosts = false;
   this.showComments = false;
   this.showFriends = false;
}
displayPosts() {
  this.showMessages = false;
  this.showPosts = true;
  this.showComments = false;
  this.showFriends = false;
}

displayComments() {
  this.showMessages = false;
  this.showPosts = false;
  this.showComments = true;
  this.showFriends = false;
}

displayFriends() {
  this.showMessages = false;
  this.showPosts = false;
  this.showComments = false;
  this.showFriends = true;
}

  logout() {
    this.router.navigate(['/login']);
  }



}

