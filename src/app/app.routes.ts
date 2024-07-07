import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RedirectComponent} from "./components/redirect/redirect.component";

export const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'react-app-route', component: RedirectComponent },

];
