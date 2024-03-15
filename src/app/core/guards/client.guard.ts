import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const ClientGuard : CanActivateFn = (route, state) =>  {
 

  const router =inject (Router);
  const authService =inject (AuthService);
    const role = authService.getRole();

    if (role === 'CLIENT') {
      return true;
    } else {
      
      router.navigate(['auth']);
      return false;
    }
  }

