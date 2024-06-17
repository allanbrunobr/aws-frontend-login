import {Component, inject, OnInit} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import { routes } from './app.routes';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {NgIf} from "@angular/common";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_TIU0pkxS4',
      userPoolClientId: '48l7gkblv09m3li6jqa7a4ljav',
      loginWith: {
        oauth: {
          domain: 'sandbox-custom.auth.us-east-1.amazoncognito.com',
          scopes: ['openid','email','phone','profile','aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:4202/main'],
          redirectSignOut: ['http://localhost:4202/'],
          responseType: 'code',
          providers: ['Google'],
        },
        email: true,
      }
    }
  }
});
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, AmplifyAuthenticatorModule, RouterLink, RouterOutlet, NavbarComponent, NgIf],
})


export class AppComponent implements OnInit{
  router = inject(Router);
  isLoggedIn = false;

  constructor(public authenticator: AuthenticatorService) {
  }
  ngOnInit(): void {

  }

}
