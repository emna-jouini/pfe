import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private apiUrl = 'http://localhost:3000/client';

  constructor(private httpclient: HttpClient) {}


  getClientList(): Observable<Client[]> {
    return this.httpclient.get<Client[]>(this.apiUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.httpclient.post<Client>(this.apiUrl, client);
  }

  
  updateClient(id: number, data: any): Observable<any> {
    return this.httpclient.put(`http://localhost:3000/client/${id}`, data);
  }



  deleteClient(clientId: number): Observable<void> {
    const url = `${this.apiUrl}/${clientId}`;
    return this.httpclient.delete<void>(url);
  }
  
}
