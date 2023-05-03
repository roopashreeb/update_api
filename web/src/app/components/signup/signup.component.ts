// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  constructor(private router: Router) {}

  signup(): void {
    // Perform signup logic here, e.g. send HTTP request to API
    console.log(`Signing up user ${this.username} with email ${this.email} and password ${this.password}`);
    this.router.navigate(['/signup/edit']);
  }
}
