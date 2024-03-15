import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/admin';

  constructor(private httpclient: HttpClient) {}

  // Méthode pour récupérer la liste des administrateurs
  getAdminList(): Observable<Admin[]> {
    return this.httpclient.get<Admin[]>(this.apiUrl);
  }

  // Méthode pour ajouter un administrateur
  addAdmin(admin: Admin): Observable<Admin> {
    return this.httpclient.post<Admin>(this.apiUrl, admin);
  }

  // Méthode pour mettre à jour un administrateur
  updateAdmin(id: number, data: any): Observable<any> {
    return this.httpclient.put(`http://localhost:3000/admin/${id}`, data);
  }



  deleteAdmin(adminId: number): Observable<void> {
    const url = `${this.apiUrl}/${adminId}`;
    return this.httpclient.delete<void>(url);
  }
  


}
