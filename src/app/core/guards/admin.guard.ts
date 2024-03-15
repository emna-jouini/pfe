import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const AdminGuard : CanActivateFn = (route, state) =>  {
 

  const router =inject (Router);
  const authService =inject (AuthService);
  const role = authService.getRole();

    if (role === 'ADMIN') {
      return true;
    } else {
      
      router.navigate(['auth']);
      return false;
    }
  }
