import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post('/api/users/login', { username, password });
  }
}
