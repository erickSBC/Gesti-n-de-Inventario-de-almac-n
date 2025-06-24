import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Usamos `inject()` para dependencias
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Permite el acceso
  } else {
    return router.createUrlTree(['/auth/log-in']); // Redirige a '/login'
  }
};