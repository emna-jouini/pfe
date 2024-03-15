import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    
  const router =inject (Router);
  const localstorage =inject (LocalStorageService);

if(localstorage.checkToken()){
  return true;
  }
  else{
    router.navigate(['auth']);
    return false;
  }
};
