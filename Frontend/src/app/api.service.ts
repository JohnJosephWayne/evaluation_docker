import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getTimes() {
    return this.http.get(`${this.apiUrl}/times`);
  }

  addTime() {
    return this.http.post(`${this.apiUrl}/time`, {});
  }
}

