import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  authService = inject(AuthService);

}
