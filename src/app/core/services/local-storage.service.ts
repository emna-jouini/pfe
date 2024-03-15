import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveToken(key: string, value: any): void {
   
    localStorage.setItem(key, JSON.stringify(value)); // Convert the value to a JSON form 
  }
  getToken(): string | null {
    // Récupérer le token depuis le localStorage
    return localStorage.getItem('token');
  }

  // vérifier l'existence  du token 
     checkToken(): boolean {
      return localStorage.getItem('token') !== null; //return true si le token existe sinon false 
  
    }
    
}
