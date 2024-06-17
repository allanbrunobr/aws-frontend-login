import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import {getCurrentUser} from "aws-amplify/auth";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (getCurrentUser() != null) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
