
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) { }


  login() {
    return this.http.post('/api/users/authenticate', { username: this.username, password: this.password }).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token', response.token);
      console.log(`${response.token}`);
      this.router.navigate(['/edit/dash']);
    }, error => {
      console.error('Login failed:', error);
    });
  }
}
