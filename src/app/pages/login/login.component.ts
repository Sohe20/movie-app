import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, SocialUser , GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule , GoogleSigninButtonModule],
})
export default class LoginComponent implements OnInit {
  user: SocialUser | null = null;

  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
      if (user) {
        alert('Login successful! Welcome ' + user.name);
      }
    });
  }
}