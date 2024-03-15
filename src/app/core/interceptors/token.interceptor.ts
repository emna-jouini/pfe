import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // le token qui va être ajouté à l'en-tête
  private authToken = 'token';

  constructor() {}

  // Implémentation de la méthode Intercept
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Cloner la requête originale
    // Ajouter le token
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authToken}` // Interpolation de données
      }
    });

    // Passer au suivant
    return next.handle(newRequest);
  }
};
