import { Injectable } from '@angular/core';
import { Ilogin, Ireset, Iforget } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | null = null;
  private url = 'http://localhost:3000'; 

  constructor(private httpClient: HttpClient) { }

  login(data: Ilogin): Observable<any> 
  { return this.httpClient.post
    (this.url + '/login', data) 
    .pipe
    ( catchError((error: any) =>
    
   { return throwError(() => error); }) );
   }

  
   forgetPassword(data: Iforget): Observable<any> {
    return this.httpClient.post(this.url+'/forget', data)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur lors de la demande de réinitialisation du mot de passe', error);
          return throwError(() => error);
        })
      );
  }



  resetPassword(data: Ireset): Observable<any> {
    return this.httpClient.post(this.url + '/reset', data)
      .pipe(
        catchError((error: any) => {

          console.error('Erreur lors de la réinitialisation du mot de passe ', error);
          return throwError(() => error);
        })
      );
  }
  getRole(): string | null {
    return this.role;
  }
}

