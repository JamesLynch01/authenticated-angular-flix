import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {
  
  user: {
    username: string,
    password: string
  };

  invalidLogin = false;

  constructor(private authenticationService: AuthenticationService, 
    private router: Router) { 
      this.user = {
        username: '',
        password: ''
      };
    }

  ngOnInit() {
  }

  async login(): Promise<void> {
    await this.authenticationService.login(this.user.username, this.user.password);

    if ( this.authenticationService.getToken === undefined ) {
      this.invalidLogin = true;
    } else {
      this.invalidLogin = false;
      this.router.navigate(['/main']);
    }
  }

  async signUp(): Promise<void> {
    await this.authenticationService.signup(this.user.username, this.user.password);
    await this.login();
  }
}
