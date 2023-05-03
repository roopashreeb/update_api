import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  firstName!: string;
  lastName!: string;
  email!: string;
  bio!: string;
  photo!: File;
  payload: any ={};


  constructor(private http: HttpClient, private router:Router) { }

  updateProfile() {
    
    this.payload = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      bio: this.bio,
      photo: this.photo,
    };
   
    console.log('Profile updated successfully');
     this.router.navigate(['/edit/dash']);
      }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.payload.photo = file;
    }
  }

}
